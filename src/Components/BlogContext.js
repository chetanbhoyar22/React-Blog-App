import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [category, setCategory] = useState([
    
    // Technology
    {
      ID: "1",
      Title: "Cyber Security : Prevention is better than cure",
      Body: `Cyber security can be described as the collective methods, technologies, and processes to help protect the confidentiality, integrity.`,
      Category: "Technology",
      Image: "https://www.kaspersky.com/content/en-global/images/repository/isc/2018-images/small-business-cyber-security.jpg",
      Author: "Chetan Bhoyar",
      Date: "March 01, 2022",
    },

    {
      ID: "2",
      Title: "Artificial Intelligence (AI) & Machine Learning",
      Body: `Machine learning is the science that will take artificial intelligence to a level beyond what humans can do. ML is used to create AI systems. `,
      Category: "Technology",
      Image: "https://img.etimg.com/thumb/msid-75691722,width-640,resizemode-4,imgsize-793956/ai/ml-based-communication.jpg",
      Author: "Chetan Bhoyar",
      Date: "February 25, 2022",
    },

    {
      ID: "3",
      Title: "Blockchain",
      Body: `The blockchain is an open, immutable distributed public ledger that allows transactions to take place in a decentralised manner without a need for a trusted third party.`,
      Category: "Technology",
      Image: "https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg",
      Author: "Chetan Bhoyar",
      Date: "January 22, 2022",
    },

    {
      ID: "4",
      Title: "Cryptography",
      Body: `It is data encryption technology which provides for secure communication in the presence of malicious third parties known as adversaries. Encryption uses an algorithm and a key to transform an plaintext into an encrypted ciphertext.`,
      Category: "Technology",
      Image: "https://media.wsimag.com/attachments/068613fbcb5a75a12fd88c61a7c5bb6bfea2bb6a/store/fill/1090/613/db0000a49e2bcfa75978007ebe04b64e0fbfcd92a9ae4346078b329715c3/The-basis-of-cryptography-is-to-encrypt-or-decrypt-messages-by-means-of-a-secret-key.jpg",
      Author: "Chetan Bhoyar",
      Date: "December 31, 2021",
    },

    {
      ID: "5",
      Title: "Internet of Things (IoT)",
      Body: `The Internet of Things is a technological revolution that represents the future of computing and communications, and its development depends on dynamic technical innovation.`,
      Category: "Technology",
      Image: "https://miro.medium.com/max/1024/1*92OdlxNqI3iChI5kNl1MFg.jpeg",
      Author: "Chetan Bhoyar",
      Date: "November 15, 2021",
    },

    {
      ID: "6",
      Title: "Internet of Behaviors",
      Body: `The Internet of Behaviors (IoB) is an area of research and development (R&D) that seeks to understand how, when and why humans use technology to make purchasing decisions.`,
      Category: "Technology",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFim5hIKIsCy4QwrmyDqeph51hstETKokkr4-4wKEiUjvWYepq7HWSyloBeeJA-pIIu9g&usqp=CAU",
      Author: "Chetan Bhoyar",
      Date: "November 01, 2021",
    },

    {
      ID: "7",
      Title: "HyperAutomation",
      Body: `Hyperautomation is a business-driven, disciplined approach that organizations use to rapidly identify, vet and automate as many business and IT processes as possible.`,
      Category: "Technology",
      Image: "https://www.e-spincorp.com/wp-content/uploads/2020/09/Hyperautomation.jpg",
      Author: "Chetan Bhoyar",
      Date: "September 22, 2021",
    },

    //Bollywood

    {
      ID: "1",
      Title: "Upcoming Movie Attack - Part 1",
      Body: `Attack - Part 1 is an upcoming Indian Hindi-language science fiction action thriller film directed by Lakshya Raj Anand, who stars in the film alongside Jacqueline Fernandez.`,
      Category: "Bollywood",
      Image: "https://stat2.bollywoodhungama.in/wp-content/uploads/2021/02/Attack.jpg",
      Author: "Chetan Bhoyar",
      Date: "March 02, 2022",
    },

    {
      ID: "2",
      Title: "Akshay Kumar In Bachan Panday",
      Body: `Bachchhan Paandey is an Indian Hindi-language action comedy film directed by Farhad Samji and produced by Sajid Nadiadwala. It stars Akshay Kumar, Kriti Sanon, Jacqueline Fernandez and Arshad Warsi. It is a remake of the 2014 Tamil film.`,
      Category: "Bollywood",
      Image: "https://assetscdn1.paytm.com/images/cinema/bachann2-21a07140-918a-11ec-9b94-392ea496e36d.jpg",
      Author: "Chetan Bhoyar",
      Date: "February 20, 2022",
    },

    {
      ID: "3",
      Title: "Gangubai Kathiawadi - Alia Bhatt",
      Body: `Gangubai Kathiawadi is a 2022 Indian Hindi-language biographical crime drama film directed by Sanjay Leela Bhansali and produced by Jayantilal Gada and Sanjay Leela Bhansali. The film stars Alia Bhatt as the titular character.`,
      Category: "Bollywood",
      Image: "https://wikinbio.com/wp-content/uploads/2021/02/Gangubai-Kathiawadi-hindi-movie-cast-actors-release-date-trailer-videos-songs-story.jpg",
      Author: "Chetan Bhoyar",
      Date: "February 05, 2022",
    },

    {
      ID: "4",
      Title: "Aayush Sharma In Antim: The Final Truth ",
      Body: `A turbaned Salman Khan comes up with a very environmentally-aware line in Antim: The Final Truth - “Iss duniya mein kuch nahi tikta sivay plastic ke (Nothing lasts in this world except plastic)”.`,
      Category: "Bollywood",
      Image: "https://m.media-amazon.com/images/M/MV5BNmY0MGIzYzktMGRlZC00ODEzLTlkMTMtZTJiZjc0ZjRhMDI0XkEyXkFqcGdeQXVyOTg0MTM1OTU@._V1_FMjpg_UX1000_.jpg",
      Author: "Chetan Bhoyar",
      Date: "January 23, 2022",
    },

    {
      ID: "5",
      Title: "New Look Abhisheck Bachchan - Bob Biswas ",
      Body: `It’s interesting to see how actor Abhishek Bachchan never from increasing weight to changing hairstyles he takes risks that are usually well paid.`,
      Category: "Bollywood",
      Image: "https://sgfs.sitcdn.com/DG/2021/12/04/Delhi/TDG/5_11/67819a56_6522_P_4_mr.jpg",
      Author: "Chetan Bhoyar",
      Date: "December 20, 2021",
    },

    {
      ID: "6",
      Title: "Rohit Shetty Blockbuster Movie - Sooryvanshi",
      Body: `Today as we celebrate the director’s 48th birthday, we take a look at his top 10 highest-grossing films. We will also talk about how well we think his upcoming cop film.`,
      Category: "Bollywood",
      Image: "https://st1.bollywoodlife.com/wp-content/uploads/2019/07/sooryavanshi.png?impolicy=Medium_Resize&w=720&h=960",
      Author: "Chetan Bhoyar",
      Date: "November 27, 2022",
    },

    {
      ID: "7",
      Title: "Watch Radhe Only On ZEE 5",
      Body: `Radhe : Your Most Wanted Bhai is a 2021 Indian Hindi-language action thriller film directed by Prabhu Deva and produced by Salman Khan, Sohail Khan, Atul Agnihotri and Zee Studios.`,
      Category: "Bollywood",
      Image: "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/05/Radhe-Salman-Khan-Disha-Patani-Randeep-Hooda-1.jpg?resize=780%2C976&ssl=1",
      Author: "Chetan Bhoyar",
      Date: "November 01, 2021",
    },

    //Tourism

    {
      ID: "1",
      Title: "Maharashtra - Western Region",
      Body: `Maharashtra attracts tourists from other Indian states and foreign countries. It was the second most visited Indian state by foreigners and fourth most visited state by domestic tourists in the country.`,
      Category: "Tourism",
      Image: "https://www.transindiatravels.com/wp-content/uploads/mumbai-3.jpg",
      Author: "Chetan Bhoyar",
      Date: "March 14, 2022",
    },

    {
      ID: "2",
      Title: "Kerala - God's Own Country",
      Body: `An equable climate, beautiful and serene beaches, peaceful stretch of backwaters and canals, exotic wildlife and lush green hill stations are some of the main attractions of Kerala.`,
      Category: "Tourism",
      Image: "https://www.kldc.org/assets/html/images/backwater.jpg",
      Author: "Chetan Bhoyar",
      Date: "February 15, 2022",
    },

    {
      ID: "3",
      Title: "Karnataka: One state Many Worlds",
      Body: `Karnataka is primarily known for its Heritage destinations and its Wildlife/ National Parks. Apart from that, it is also famous for its magical hill station.`,
      Category: "Tourism",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTa-MNkZwmfrKvSp4TTUW0Qz8Gl5u3MNi0w&usqp=CAU",
      Author: "Chetan Bhoyar",
      Date: "January 12, 2022",
    },

    {
      ID: "4",
      Title: "Madhya Pradesh: The Heart of Incredible India",
      Body: `It is known as the “Heart of India” because of a lot many things that it has to offer. It has been home to cultural.`,
      Category: "Tourism",
      Image: "https://static.toiimg.com/photo/msid-80110775,width-96,height-65.cms",
      Author: "Chetan Bhoyar",
      Date: "December 25, 2021",
    },

    {
      ID: "5",
      Title: "Punjab: India Begins Here",
      Body: `The Harmandir Sahib in Amritsar is the holiest site in Sikhism, and one of the most visited tourist attractions in India. It's popular place to visit in punjab state, India.`,
      Category: "Tourism",
      Image: "https://thumbs.dreamstime.com/b/golden-temple-amritsar-harmandir-sahib-golden-temple-also-known-as-darbar-sahib-gurdwara-located-city-amritsar-138091898.jpg",
      Author: "Chetan Bhoyar",
      Date: "November 03, 2021",
    },

    {
      ID: "6",
      Title: "Sikkim: Small But Beautiful",
      Body: `A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth.`,
      Category: "Tourism",
      Image: "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645070867_5_4.jpg",
      Author: "Chetan Bhoyar",
      Date: "August 22, 2021",
    },

    {
      ID: "7",
      Title: "Uttar Pardesh - Rich Culture and Tradition",
      Body: `The Taj Mahal, which was constructed in 1632 by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, named 'Roza-e-Munavvara' which means Unique Building.`,
      Category: "Tourism",
      Image: "https://www.holidify.com/images/tooltipImages/AGRA.jpg",
      Author: "Chetan Bhoyar",
      Date: "July 15, 2021",
    },

    //Fitness

    {
      ID: "1",
      Title: "Aerobic",
      Body: `Activity that you do for more than a few minutes at a time is aerobic training. When you're doing this type of exercise, your body uses your aerobic energy system for power.`,
      Category: "Fitness",
      Image: "https://img.freepik.com/free-photo/group-women-exercising-aerobic-stepper_107420-50751.jpg",
      Author: "Chetan Bhoyar",
      Date: "March 15, 2022",
    },

    {
      ID: "2",
      Title: "Balance",
      Body: `Actively working to maintain and improve your balance and stability is incredibly important, especially as you age. Improving your balance can help you .`,
      Category: "Fitness",
      Image: "https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/39/1506534969-jeh-rr-key-visual-shot-3-062-lede.jpg",
      Author: "Chetan Bhoyar",
      Date: "February 25, 2022",
    },

    {
      ID: "3",
      Title: "Sweat Now Shine Later",
      Body: `Weight training is a type of strength training that uses weights for resistance. Weight training provides a stress to the muscles that causes them to adapt and get stronger.`,
      Category: "Fitness",
      Image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      Author: "Chetan Bhoyar",
      Date: "January 12, 2022",
    },

    {
      ID: "4",
      Title: "Flexibility",
      Body: `Possibly one of the most important types of fitness training is flexibility and mobility. Flexibility is the ability of your muscles to stretch. Mobility is being able to move your joints and tissues through their full range of motion.`,
      Category: "Fitness",
      Image: "https://post.healthline.com/wp-content/uploads/2019/10/1296x728-body1-1296x728.jpg",
      Author: "Chetan Bhoyar",
      Date: "November 11, 2021",
    },

    {
      ID: "5",
      Title: "Sprint",
      Body: `Sprinting is running over a short distance at the top-most speed of the body in a limited period of time. The use of starting blocks allows the sprinter to perform an enhanced isometric preload.`,
      Category: "Fitness",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUy6e7_anvD5qIIvW_vBWLB-jViM258UQLVw&usqp=CAU",
      Author: "Chetan Bhoyar",
      Date: "August 09, 2021",
    },

    {
      ID: "6",
      Title: "Brisk Walking or Jogging",
      Body: `You have to spend more time walking than you do running to get the same health benefits it takes longer to walk than to run the same distance. A 15-minute jog burns about the same number of calories.`,
      Category: "Fitness",
      Image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/08/Santa_Monica_Path-732x549-Thumbnail-732x549.jpg?w=756&h=567",
      Author: "Chetan Bhoyar",
      Date: "June 11, 2021",
    },

    {
      ID: "7",
      Title: "Swimming",
      Body: `Swimming is a great workout because you need to move your whole body against the resistance of the water. Swimming is a good all-round activity because it keeps your heart rate up but takes some time.`,
      Category: "Fitness",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86gUMpymP6jpV8K_PcO5KMH4KMo8h_OnnhizGb1gWztkDJqkxVJWBajA1jtvx7fkLa14&usqp=CAU",
      Author: "Chetan Bhoyar",
      Date: "May 11, 2021",
    },

    //Food

    {
      ID: "1",
      Title: "Paneer Tikka",
      Body: `Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes.`,
      Category: "Food",
      Image: "https://thebellyrulesthemind.net/wp-content/uploads/2019/12/Air-Fryer-Tandoori-Paneer-Tikka-7-720x405.png",
      Author: "Chetan Bhoyar",
      Date: "March 11, 2022",
    },

    {
      ID: "2",
      Title: "Masala Dosa",
      Body: `It is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek and ghee, erved with sambar.`,
      Category: "Food",
      Image: "https://www.palatesdesire.com/wp-content/uploads/2019/09/Mysore_Masala_Dosa@Palates_Desire-e1593275925544-scaled.jpg",
      Author: "Chetan Bhoyar",
      Date: "December 10, 2021",
    },

    {
      ID: "3",
      Title: "Malai Kofta",
      Body: `It is a delicious dish of fried balls of potato and paneer in a rich and creamy mild gravy made with sweet onions and tomatoes. Malai means cream and kofta are fried balls.`,
      Category: "Food",
      Image: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/12/malai-kofta-recipe-step-by-step-instructions.jpg?fit=3676%2C2878&quality=65&strip=all&ssl=1",
      Author: "Chetan Bhoyar",
      Date: "November 08, 2021",
    },

    {
      ID: "4",
      Title: "Indian Thali",
      Body: `Thali the meal refers to many different dishes, served in small bowls called (Katori in Hindi) arranged on a Thali. A flatbread, rice, salad, and dessert are also included, as like chapatis.`,
      Category: "Food",
      Image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&w=1000&q=80",
      Author: "Chetan Bhoyar",
      Date: "May 12, 2021",
    },

    {
      ID: "5",
      Title: "Maach Bhaat",
      Body: `Bengal has been famous for its food and cuisine ever since the establishment of civilization in the landscape of gluttons, made up of the sovereign state of Bangladesh.`,
      Category: "Food",
      Image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/ruby_pathak-yahoo.com/hilsa_fish_curry_bengali_style.JPG",
      Author: "Chetan Bhoyar",
      Date: "February 20, 2021",
    },

    {
      ID: "6",
      Title: "Dal Dhokli",
      Body: `It is a traditional dish of Guajarati cuisine generally prepared with dals (lentils) and wheat flour as base ingredients. It has soft textured dhokli.`,
      Category: "Food",
      Image: "https://cookingfromheart.com/wp-content/uploads/2017/04/Dal-Dhokli-6-500x375.jpg",
      Author: "Chetan Bhoyar",
      Date: "December 07, 2020",
    },

    {
      ID: "7",
      Title: "Sandesh",
      Body: `Indian desserts out there, Sandesh is made of only three ingredients! All you need is milk, lemon juice and sugar to make these Bengali sweets. For a pretty presentation and a little bite. Sandesh are the perfect sweet.`,
      Category: "Food",
      Image: "https://www.tasteofhome.com/wp-content/uploads/2021/01/sandesh-indian-dessert.jpg?fit=700,700",
      Author: "Chetan Bhoyar",
      Date: "April 22, 2020",
    },
  ]);

  return (
    <div>
      <BlogContext.Provider value={[category, setCategory]}>
        {props.children}
      </BlogContext.Provider>
    </div>
  );
};