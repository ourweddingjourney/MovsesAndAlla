import React, { useState } from "react";
import { ReactComponent as WeddingIcon } from '../assets/images/love-birds-svgrepo-com.svg';
import PIC14 from '../assets/images/ANDR-14.jpg'
import PIC26 from '../assets/images/ANDR-26.jpg'
import PIC33 from '../assets/images/ANDR-33.jpg'
import PIC48 from '../assets/images/ANDR-48.jpg'
import PIC51 from '../assets/images/ANDR-51.jpg'
import PIC7 from '../assets/images/ANDR-7.jpg'
import { ReactComponent as Hearts_Bride } from '../assets/images/hearts-love-svgrepo-com.svg';
import { ReactComponent as Hearts_Groom } from '../assets/images/hearts-heart-svgrepo-com.svg';
import { ReactComponent as WeddingRing } from '../assets/images/wedding-rings-svgrepo-com.svg';
import { ReactComponent as Cheers } from '../assets/images/cheers-toast-svgrepo-com.svg';
import GuestList from "./GuestList";

function Program() {
    const [openMaps, setOpenMaps] = useState({});
    const [showModal, setShowModal] = useState(false);

    const locations = [
        {
            location: "Պսակադրություն",
            name: "Սուրբ Հովհաննես Եկեղեցի",
            address: "ք. Արտաշատ, Երևանյան 2",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.646999809918!2d44.531710725188894!3d39.95921030610777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406acb973112bcd5%3A0x134f6d194ddf4d79!2sSaint%20Hovhannes%20Church!5e0!3m2!1sen!2sam!4v1743456415736!5m2!1sen!2sam",
        },
        {
            location: "Հարսանյաց Հանդիսություն",
            name: "Վահագնի Հոլլ Ռեստորանային Համալիր",
            address: "գ․ Այգավան, Արարատյան 25",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1531.111719436063!2d44.6613196!3d39.8692327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401531a564455a81%3A0x2427d9961fe9a219!2sVAHAGNI%20HALL!5e0!3m2!1sen!2sam!4v1743458367049!5m2!1sen!2sam",
        },
    ];

    const handleToggleMap = (index) => {
        setOpenMaps((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handleInfo = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    if (showModal === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <div className="program">
            <WeddingIcon width={150} height={150} fill="#5a4d47" />

            <div className="letter">
                <span>Սիրելի ընկերներ և բարեկամներ</span>
                <p>Մենք ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի կարևորագույն օրերից մեկը։ Սիրով հրավիրում ենք Ձեզ մեր հարսանիքին։</p>
                <span>26.04.2025</span>
            </div>

            <div className="photos">
                <img src={PIC51} className="photo1" />
                <img src={PIC14} className="photo2" />
                <img src={PIC7} className="photo3" />
            </div>

            <div className="day-program">
                <span className="title">Օրվա Ծրագիրը</span>
                <p>
                    <Hearts_Bride width={75} height={75} fill="#5a4d47" />
                    <div>
                        <p>13:00</p>
                        <span>Հարսի Տուն</span>
                    </div>
                </p>
                <p>
                    <WeddingRing width={75} height={75} fill="#5a4d47" />
                    <div>
                        <p>14:30</p>
                        <span>Պսակադրություն</span>
                    </div>
                </p>
                <p>
                    <Hearts_Groom width={75} height={75} fill="#5a4d47" />
                    <div>
                        <p>16:00</p>
                        <span>Փեսայի Տուն</span>
                    </div>
                </p>
                <p>
                    <Cheers width={75} height={75} fill="#5a4d47" />
                    <div>
                        <p>17:30</p>
                        <span>Հարսանյաց Հանդիսություն</span>
                    </div>
                </p>
            </div>

            <div className="photos">
                <img src={PIC26} className="photo1" />
                <img src={PIC33} className="photo2" />
                <img src={PIC48} className="photo3" />
            </div>

            <div className="venues-container">
                {locations.map((venue, index) => (
                    <div className="venue" key={index}>
                        <p className="venue-address">{venue.location}</p>
                        <h2 className="venue-title">{venue.name}</h2>
                        <p className="venue-address">{venue.address}</p>
                        <button className="venue-button" onClick={() => handleToggleMap(index)}>
                            {openMaps[index] ? "ՓԱԿԵԼ ՔԱՐՏԵԶԸ" : "ԴԻՏԵԼ ՔԱՐՏԵԶԸ"}
                        </button>

                        {openMaps[index] && (
                            <div className="map-container">
                                <iframe
                                    src={venue.mapEmbed}
                                    width="1000"
                                    height="600"
                                    style={{ border: 0, marginTop: "20px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <span className="guestlist">
                Հյուրերի ցուցակը և սեղանների դասավորությունը կարող ես տեսնել{" "}
                <span onClick={handleInfo} style={{ background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>այստեղ</span>
            </span>
            {showModal && <GuestList onClose={handleModalClose} />}
            <WeddingIcon width={150} height={150} fill="#5a4d47" />
        </div>
    );
}

export default Program;