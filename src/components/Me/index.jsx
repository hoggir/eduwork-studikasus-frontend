import React from "react";
import "./index.css";

export default function me(data) {
  //console.log(data.me)
  return (
    <div className="my-profile-wrapper">
      <div className="my-profile-title">Profile Saya</div>
      <div className="my-profile-title-desc">
        Kelola informasi profil Anda untuk mengontrol, melindungi dan
        mengamankan akun
      </div>
      <hr />
      <div className="my-profile-main">
        <div className="my-profile-main-item">
          <div className="my-profile-main-item-left">User ID</div>
          <div className="my-profile-main-item-right">
            {data.me.customer_id}
          </div>
        </div>
        <div className="my-profile-main-item">
          <div className="my-profile-main-item-left">Fullname</div>
          <div className="my-profile-main-item-right">{data.me.full_name}</div>
        </div>
        <div className="my-profile-main-item">
          <div className="my-profile-main-item-left">Email</div>
          <div className="my-profile-main-item-right">{data.me.email}</div>
        </div>
      </div>
    </div>
  );
}
