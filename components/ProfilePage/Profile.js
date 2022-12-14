import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import FormData from 'form-data';
//IMPORT COMPONENT
import { Button } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import ProfileAchievement from './ProfileAchievement';
import Swal from 'sweetalert2';
//IMPORT ICONS
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook } from 'react-icons/fa';
import dummy from '../../public/uploaddummy.png';
import Rps from '../../public/rps.png';
import defaultprofile from '../../public/profile-dummy.png';
// Import Redux useSelector
import { useSelector } from 'react-redux'

function Profile() {
    const [show, setShow] = useState();
    const [picture, setShowPicture] = useState();
    const [image, setImage] = useState(dummy);
    const [saveImage, setSaveImage] = useState('');
    const [photo, setPhoto] = useState();
    const [preview, setPreview] = useState(defaultprofile);
    const handleModal = () => setShow(true);
    const closeModal = () => setShow(false);
    const openModalPicture = () => setShowPicture(true);
    const closeModalPicture = () => setShowPicture(false);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // INISIASI STATE UNTUK DATA PROFILE
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [social, setSocial] = useState('');
    const [aboutMe, setAboutMe] = useState('');

    // Put authentication store's data into variable
    const authId = useSelector(state => state.authentication.id)

    useEffect(() => {
        fetch(`https://teamone-server.herokuapp.com/api/users/${authId}`)
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);

                    setName(res.data.name);
                    setUsername(res.data.username);
                    setEmail(res.data.email);
                    setSocial(res.data.social);
                    setAboutMe(res.data.about_me);
                    setPreview(res.data.image_url);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [authId])

    useEffect(() => {
        if (!photo) {
            setPreview(defaultprofile)
            return
        }
        const objectUrl = URL.createObjectURL(photo)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [photo])

    //HANDLE UPDATE TO BACKEND
    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post(`https://teamone-server.herokuapp.com/api/update/${authId}`, {
                name: name,
                username: username,
                email: email,
                social: social,
                about_me: aboutMe
            });


            if (result.data.message === "profile updated!") {
                console.log('Profil sudah terupdate')
                Swal.fire({
                    icon: 'success',
                    title: 'SUCCESS',
                    text: 'Profile Updated!',
                    confirmButtonColor: '#dc3545',
                })
                closeModal();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'UPDATE FAILED',
                    text: 'Please try again',
                    confirmButtonColor: '#dc3545',
                })

            }

        }
        catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'UPDATE FAILED',
                text: err.toString(),
                confirmButtonColor: '#dc3545',
            })
        }
    }

    function handleUploadChange(e) {
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setPhoto(e.target.files[0]);
        setImage(URL.createObjectURL(uploaded));
        setSaveImage(uploaded);
    }

    //MENAMBAHKAN DATA KE FORM
    var form = new FormData();
    form.append('photo', saveImage);

    function uploadedImage(e) {
        if (!saveImage) {
            Swal.fire({
                icon: 'warning',
                title: 'ALERT',
                text: 'CHOOSE YOUR PROFILE PICTURE FIRST',
                confirmButtonColor: '#dc3545',
            })
        } else {
            const result = axios.post(`https://teamone-server.herokuapp.com/api/upload/${authId}`, form)
            Swal.fire({
                icon: 'success',
                title: 'SUCCESS',
                text: 'IMAGE UPLOADED',
                confirmButtonColor: '#dc3545',
            })
            closeModalPicture();
        }
    }
    return (
        <>
            <div className='container-fluid bg-light min-vh-100 ptb'>
                <div className='row bg-light '>
                    <div className='col-3 pt-5 px-5'>
                        <div className='card pp-section bg-light mb-3'>
                            {/* eslint-disable @next/next/no-img-element */}
                            <img className='profile-pict' src={preview} height={250} width={250} alt="profile" />
                        </div>
                        <div className='row pt-3 justify-content-center'>
                            <Button onClick={openModalPicture} className='btn-change-profile' color='danger'>Change Profile Picture</Button>
                        </div>
                        <div className='row'>
                            <ul className='profile-socials'>
                                <li><a className='instagram' href='https://www.instagram.com/'><FaInstagram /></a></li>
                                <li><a className='twitter' href='https://twitter.com/'><FaTwitter /></a></li>
                                <li><a className='tiktok' href='https://www.tiktok.com/'><FaTiktok /></a></li>
                                <li><a className='facebook' href='https://www.facebook.com/'><FaFacebook /></a></li>
                            </ul>
                        </div>
                        <div className='row text-center'>
                            <h4>GAME HISTORY</h4><hr></hr>
                            <div>
                                <Image src={Rps} className="img-fluid" alt="game" />
                            </div>
                        </div>
                    </div>
                    <div className='col-9 pt-5 px-5 bg-white'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <h1>USER PROFILE</h1>
                                </div>
                                <div className='col text-end'>
                                    <Button onClick={handleModal} color='danger' outline>Edit profile</Button>
                                </div>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label text-black">Name</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="name" value={name} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-black">Username</label>
                                    <input type="text" className="form-control" id="username" aria-describedby="username" value={username} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-black">Email</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-black">Social Media</label>
                                    <input type="text" className="form-control" id="social" aria-describedby="social" value={social} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label className='form-label text-black'>About Me</label>
                                    <textarea className="form-control form-sizing" id="exampleFormControlTextarea1" aria-describedby="aboutMe" value={aboutMe} readOnly rows="3"></textarea>
                                </div>
                            </form>
                            {/* )
                                )
                            } */}
                            <div className='row'>
                                <ProfileAchievement />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={closeModal}>
                <Modal.Header>
                    <b>EDIT DATA</b>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdateProfile}>
                        <div className="mb-3">
                            <label className="form-label text-black">Name</label>
                            <input type="text" required className="form-control" id="name" aria-describedby="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-black">Username</label>
                            <input type="text" required className="form-control" id="username" aria-describedby="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-black">Email</label>
                            <input type="email" required className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-black">Social Media URL</label>
                            <input type="text" className="form-control" id="social" aria-describedby="social" value={social} onChange={(e) => setSocial(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className='form-label text-black'>About Me</label>
                            <textarea className="form-control form-sizing" id="exampleFormControlTextarea1" aria-describedby="social" value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} rows="3"></textarea>
                        </div>
                        <Modal.Footer >
                            <Button type="submit" className="btn btn-danger">Submit</Button>
                            <Button className='buttonSumbit btn-dark btn-modal' onClick={closeModal}>Close</Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>

            <Modal show={picture} onHide={closeModal}>
                <Modal.Header>
                    <b>EDIT PROFILE IMAGE</b>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='text-center'>
                            <Image src={image} height={250} width={350} className='img-thumbnail' alt='profileimage' />
                        </div>
                        <div className='pt-3'>
                            <label htmlFor='formFile' className='form-label text-black'>Upload Image Here</label>
                            <input type='file' className='form-control' id='formFile' name='photo' onChange={handleUploadChange} accept='image/*' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='center'>
                    <Button onClick={uploadedImage} type="submit" className="btn btn-danger buttonSumbit">Submit</Button>
                    <Button className='btn-dark btn-modal' onClick={closeModalPicture}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Profile