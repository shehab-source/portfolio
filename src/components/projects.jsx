import CircularGallery from './Custom/ReactBits/circular'
import ChromaGrid from './Custom/ReactBits/chromagrid'

const items = [
  {
    image: "/src/assets/projects/amazon.PNG",
    title: "amazon clone",
    subtitle: "made with bootstrap",
    handle: "@shihab",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "D:/web-dev/bootstrap/amazon.html"
  },
  {
    image: "/src/assets/projects/booking.png",
    title: "booking clone",
    subtitle: "made with bootstrap",
    handle: "@",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg, #3B82F6, #000)",
    url: ""
  },
  {
    image: "/src/assets/projects/Capture.PNG",
    title: "mortage calculator",
    subtitle: "made with raw javascript with some validations, locating user and saving some cookies",
    handle: "@",
    borderColor: "#eae713ff",
    gradient: "linear-gradient(180deg, #eae713ff, #000)",
    url: ""
  },
  {
    image: "/src/assets/projects/netflix.png",
    title: "netflix clone",
    subtitle: "made with bootstrap and some raw CSS",
    handle: "@",
    borderColor: "#fd0606ff",
    gradient: "linear-gradient(180deg, #fd0606ff, #000)",
    url: ""
  },
  {
    image: "/src/assets/projects/whatsapp_login.png",
    title: "whatsappp log-in clone",
    subtitle: "made with bootstrap and some raw CSS",
    handle: "@",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: ""
  },
  {
    image: "/src/assets/projects/whatsapphomepage.png",
    title: "whatsappp homepage clone",
    subtitle: "made with bootstrap and some raw CSS",
    handle: "@",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: ""
  }
];

const project = () => {
  return (
    

      <div className='mb-40'>
      
        <div id='projects' style={{ height: '100%', position: 'relative' }}>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
          
        </div>
      </div>
    
  )
}

export default project