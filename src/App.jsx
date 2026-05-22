import Section1 from "./components/section1/section1"

function App() {
  const users=[
  { 
   img:"https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
   intro:"",
   color:"blue",
   tag:"satisfied"
  },

  {
   img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   intro:"",
   color:"red",
   tag:"underserved"
  },

  {
   img:"https://images.unsplash.com/photo-1555421689-43cad7100750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
   intro:"",
   color:"green",
   tag:"underbanked"
  },
   {
   img:"https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=JepBOGOGiPwRF2z0pwiADeUZhsk6eFt4eKliWjzDGHo=",
   intro:"",
   color:"orange",
   tag:"underserved"
  },
   {
   img:"https://media.istockphoto.com/id/1233085632/photo/indian-young-businessman-stock-images.webp?a=1&b=1&s=612x612&w=0&k=20&c=XW3VCS5RBm4sBXDMa-lA8gTNuyqy65zDgFgJiVZ2Pes=",
   intro:"",
   color:"black",
   tag:"satisfied"
  },
   {
   img:"https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yv0Xx4Sl54NsId-FNpm8Bd2YlM56gCK3VBmmx-CR_uw=",
   intro:"",
   color:"purple",
   tag:"underbanked"
  }
  ]
  return (
    <div >
     <Section1 users={users} />
    
    </div>
  )
}

export default App