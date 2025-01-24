// TeamSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const TeamDetails = {
  secondYear: [
    {
      id: uuidv4(),
      name: "Ram Kumar",
      year: "2nd Year",
      role: "Web Developer",
      linkedIn: "https://www.linkedin.com/in/ram-kumar999",
      email: "ramkumar18092005@gmail.com",
      instagram: "https://www.instagram.com/Ram_kumar_9525",
      profileImage: "", 
    },
    {
      id: uuidv4(),
      name: "Anuj Gour",
      year: "2nd Year",
      role: "FinTech",
      linkedIn: "https://www.linkedin.com/in/anuj-gour-13198a28a",
      email: "anujgour0124@gmail.com",
      instagram: "https://www.instagram.com/anujgour_27/profilec",
      profileImage: "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660122/pixelcut-export_-_Anuj_Gour_ovbibc.png",
    },
    {
      id: uuidv4(),
      name: "Anupam Kumar Tiwari",
      year: "2nd Year",
      role: "Sponsorship Executive",
      linkedIn: "https://www.linkedin.com/in/anupam-kumar-tiwari",
      email: "apriyam2005@gmail.com",
      instagram: "https://www.instagram.com/anupam_nitb/profilec",
      profileImage: "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660122/Photoroom-20241026_151614_-_Anupam_Kumar_Tiwari_rptord.png",
    },
    {
      id: uuidv4(),
      name: "Vaibhav Mandwar",
      year: "2nd Year",
      role: "Photographer",
      linkedIn: "https://www.linkedin.com/in/Vaibhav Mandwar",
      email: "vaibhavmb97@gmail.com",
      instagram: "https://www.instagram.com/waybhav_07",
      profileImage: "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660123/IMG_2299_-_Vaibhav_M_vianuc.jpg",
    },
    {
      id: uuidv4(),
      name: "Nikhil Solanki",
      year: "2nd Year",
      role: "Event Manager",
      linkedIn: "https://www.linkedin.com/in/nikhil-solanki-a7a",
      email: "nikhilsolanki2306@gmail.com",
      instagram: "https://www.instagram.com/_n_i_k_k_23/profilec",
      profileImage: "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660119/IMG-20250102-WA0005_-_Nikhil_Paras_pjmvvi.jpg",
    },
  ],
  thirdYear: [
    {
      id: uuidv4(),
      name: "KARAN CHOUDHARY",
      year: "3rd Year",
      role: "Co-Coordinator(Management)",
      linkedIn: "https://www.linkedin.com/in/karan-choudhary-8b",
      email: "krnchdryoo7@gmail.com",
      instagram: "https://www.instagram.com/aisenh_037/",
      profileImage: "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660480/IMG_20250102_205416_-_KARAN_CHOUDHARY_xupxlb.jpg",
    },
    {
      id: uuidv4(),
      name: "Rishabh Patel",
      year: "3rd Year",
      role: "Operational Head",
      linkedIn: "https://www.linkedin.com/in/rishabh-patel-27bb",
      email: "rishabh558patel@gmail.com",
      instagram: "https://www.instagram.com/risheclipse",
      profileImage: "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660479/IMG_20241122_190630_263_-_Rishabh_patel_zzvrnm.webp",
    },
    {
      id: uuidv4(),
      name: "Ayush Gautam",
      year: "3rd Year",
      role: "Cordinator",
      linkedIn: "https://www.linkedin.com/in/ayush-gautam-15731",
      email: "ayushgautam5v@gmail.com",
      instagram: "https://www.instagram.com/",
      profileImage: "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660478/IMG-20241213-WA0007_-_Ayush_Gautam_na9nuf.jpg",
    },
    {
      id: uuidv4(),
      name: "Arman Pal",
      year: "3rd Year",
      role: "Web Development Head",
      linkedIn: "https://www.linkedin.com/in/",
      email: "armanpal272005@gmail.com",
      instagram: "https://www.instagram.com/",
      profileImage: "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660479/20241101_145822_resized_-_Arman_pal_frkjqd.jpg",
    },
    {
      id: uuidv4(),
      name: "Shriyansh Chourasiya",
      year: "3rd Year",
      role: "Co-coordinator (Admin)",
      linkedIn: "https://www.linkedin.com/in/shriyansh-chourasiya",
      email: "shriyanshchourasiya96@gmail.com",
      instagram: "https://www.instagram.com/ll_mr.unpredictable_",
      profileImage: "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660481/Taj_photo_-_Shriyansh_Chourasiya_fm8e2a.jpg",
    },
  ],
};

const teamSlice = createSlice({
  name: 'team',
  initialState: TeamDetails,
  reducers: {},
});

export default teamSlice.reducer;
