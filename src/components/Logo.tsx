import logo from"../assets/img/logo.png";

export default function Logo(){
    return <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-16 h-11" />
          <span className="text-xl font-bold text-white">FITNESXIA</span>
        </div>
}