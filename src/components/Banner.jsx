import bannerimg from "../../public/assets/banner-main.png"
const Banner = () => {
  return (
    <div
    className="max-w-330 w-full bg-[linear-gradient(45deg,#8388e4_0%,#000,#cd988d_100%)] flex items-center flex-col justify-center gap-10 py-10 md:py-20 mx-auto mt-20 rounded-xl">
        <img className="w-1/4" src={bannerimg} alt="" />
        <h2 className="leading-15 text-white font-bold text-[3vw]">Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p className="text-[#ffffff70]">Beyond Boundaries Beyond Limits</p>
        <button className=" border-2 border-yellow-300 p-2 rounded-md"><div className="bg-yellow-300 p-2 rounded-md font-medium">Claim Free Credit</div></button>
    </div>
  )
}

export default Banner