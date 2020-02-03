import nanokarrin from "../images/branding_nk_logo-podluzne-biale.png";
import React from "react";

const Music = () => <>
    <h2 className="major">Music and dubbing</h2>
    <p>
        My life is filled with smaller and bigger projects, some are IT-related, some are not.
        The former are usually connected with music, dubbing or both.
    </p>

    <h3>Hanasaku Iroha: Home Sweet Home</h3>
    <p>
        I was a producer and sound engineer for official Polish dubbing of 'Hanasaku Iroha: Home Sweet Home' movie,
        distributed by Animagia.pl.
    </p>

    <h3>NanoKarrin</h3>
    <span className="image main">
        <img src={nanokarrin} alt="" />
    </span>
    <p>
        NanoKarrin is the biggest Polish fandubbing group that connects amateurs, professionals and everyone in between.
        My main responsibilities within the group are sound engineering, recruitment and coordination of events like workshops,
        concerts, festivals and so on. Beside publishing various work on YouTube channel, we travel around Poland showing people that
        dubbing can be treated as a recreational activity and has a value beyond pure utility.
    </p>
</>;

export default Music;