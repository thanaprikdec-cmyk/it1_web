"use client";
export default function forgotpassword() {

  return (

    <div className="auth-page">
      <form className="auth-card">
        <h2> 𝐅𝐨𝐫𝐠𝐨𝐭 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 </h2>
        <input
           placeholder="𝐎𝐥𝐝 𝐩𝐚𝐬𝐬𝐰𝐨𝐫𝐝"
            type="text"
        />
        <input
            placeholder="𝐍𝐞𝐰 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝"
            type="password"
       />
       <input
            placeholder="𝐂𝐨𝐧𝐟𝐢𝐫𝐦 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝"
            type="password"
       />
      <button>𝐂𝐨𝐧𝐟𝐢𝐫𝐦</button>
      </form>
    </div>
  );
}