import fitnestLogo from "../ui/images/fitnestLogo.png";
import whatsappLogo from "../ui/images/whatsappLogo.png";
import facebookLogo from "../ui/images/facebookLogo.png";
import instagramLogo from "../ui/images/instagramLogo.png";
import twitterLogo from "../ui/images/twitterLogo.png";
import youtubeLogo from "../ui/images/youtubeLogo.png";
import appStoreLogo from "../ui/images/appStoreLogo.png";
import googlePlayLogo from "../ui/images/googlePlayLogo.png";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex flex-row bg-cyan-200 px-5 pt-5 pb-10">
        <div className="flex basis-1/3 flex-col">
          <div>
            <p className="font-bold">Aplikasi</p>
            <div className="ml-1 mt-3 flex flex-col">
              <div className="ml-5">
                <a href="">
                  <img src={googlePlayLogo}></img>
                </a>
              </div>
              <div className="mt-2">
                <a href="">
                  <img src={appStoreLogo}></img>
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-2 font-bold">Ikuti Kami</p>
            <div className="mt-1 flex flex-row">
              <div className="m-1">
                <a href="">
                  <img src={twitterLogo}></img>
                </a>
              </div>
              <div className="m-1">
                <a href="">
                  <img src={facebookLogo}></img>
                </a>
              </div>
              <div className="m-1">
                <a href="">
                  <img src={instagramLogo}></img>
                </a>
              </div>
              <div className="m-1">
                <a href="">
                  <img src={youtubeLogo}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <p className="font-bold">Tentang Kami</p>
          <ul className="mt-2">
            <li>
              <a href="">Profil Perusahaan</a>
            </li>
            <li>
              <a href="">Informasi Layanan</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Daftar Member</a>
            </li>
          </ul>
        </div>
        <div className="flex basis-1/3 flex-col">
          <div>
            <p className="font-bold">Alamat Kami</p>
            <p className="mt-2">
              Pasar Tanah Abang Blok G <br></br>Jl. Kb. Jati, RT.00/RW.00, Kp.
              Bali, Kecamatan Tanah Abang, Kota Jakarta Pusat, <br></br>Daerah
              Khusus Ibukota Jakarta 10250
            </p>
          </div>
          <div>
            <p className="mt-2 font-bold">Hotline (Whatsapp only)</p>
            <p className="mt-2">
              <img src={whatsappLogo}></img> 08XX XXXX XXXX
            </p>
          </div>
          <div className="mt-4">
            <img src={fitnestLogo}></img>
          </div>
        </div>
      </div>

      <div className="bg-cyan-500 py-2 text-center text-white">
        Copyright © 2022. FITNEST Toko Perlengkapan Olahraga Terlengkap
      </div>
    </footer>
  );
}
