import {Link} from "react-router-dom";

export default function PetsProf() {
  const dogs = [
    {
      name: "Max",
      age: "2 years",
      breed: "Alaskan Malamute",
      img: "https://www.adiestradorescaninos.es/wp-content/uploads/2023/01/alaskan-malamute-1536x1097.jpg",
      about:
        "Max is an adventurous and energetic Alaskan Malamute puppy who loves the outdoors and playing fetch. He is looking for an active family.",
    },
    {
      name: "Bella",
      age: "3 years",
      breed: "Rottweiler",
      img: "https://dogbreeds.wiki/uploads/r/rottweiler-photo-12.jpg",
      about:
        "Bella is a loyal and protective Rottweiler. She is gentle with kids and enjoys long walks in the park.",
    },
    {
      name: "Charlie",
      age: "1 year",
      breed: "Mixed Breed",
      img: "https://www.thesprucepets.com/thmb/MyqERdK5rKiUF0jwuHM6KTqQuek=/1080x1080/filters:no_upscale():max_bytes(150000):strip_icc()/hound-5a610f0aeb4d520037d3846f.jpg",
      about:
        "Charlie is a playful and affectionate pup who loves cuddles and belly rubs. He gets along well with other pets.",
    },
    {
      name: "Rocky",
      age: "4 years",
      breed: "Labrador Retriever",
      img: "https://petsidi.com/wp-content/uploads/2018/07/black-labrador-retriever-pictures.jpg",
      about:
        "Rocky is a friendly Labrador who enjoys swimming and playing with toys. He is well-trained and eager to please.",
    },
    {
      name: "Lucy",
      age: "2.5 years",
      breed: "Beagle",
      img: "https://www.madpaws.com.au/wp-content/uploads/2018/10/Beagle.jpg",
      about:
        "Lucy is a curious Beagle with a great sense of smell. She loves exploring and is very affectionate.",
    },
    {
      name: "Daisy",
      age: "3 years",
      breed: "German Shepherd",
      img: "https://www.ukgermanshepherdrescue.co.uk/assets/images/mbr-3-1920x1285.jpeg",
      about:
        "Daisy is a smart and loyal German Shepherd. She is protective and makes a great companion.",
    },
    {
      name: "Cooper",
      age: "2 years",
      breed: "Border Collie",
      img: "https://animalsbreeds.com/wp-content/uploads/2015/01/border-collie-5.jpg",
      about:
        "Cooper is an energetic Border Collie who loves to run and play. He is very intelligent and loves learning new tricks.",
    },
    {
      name: "Milo",
      age: "1.5 years",
      breed: "Pug",
      img: "https://img5.dogthelove.com/201810/2019/0718/9a/c/593265/500x350x100x0.jpg",
      about:
        "Milo is a charming Pug with a big personality. He loves attention and is great with children.",
    },
    {
      name: "Luna",
      age: "2 years",
      breed: "Siberian Husky",
      img: "https://breedadvisor.com/wp-content/uploads/2020/02/SIBERIAN-HUSKY-PORTRAIT.jpg",
      about: "Luna is a beautiful Husky with striking blue eyes. She is playful and loves the snow.",
    },
    {
      name: "Buddy",
      age: "3 years",
      breed: "Golden Retriever",
      img: "https://www.labrottie.com/wp-content/uploads/2022/08/Golden-Retriever-Dog-Names-Labrottie.com_-683x1024.jpg",
      about:
        "Buddy is a gentle Golden Retriever who loves everyone he meets. He is calm and affectionate.",
    },
    {
      name: "Maggie",
      age: "2 years",
      breed: "Dalmatian",
      img: "https://media-be.chewy.com/wp-content/uploads/2021/05/27134335/Dalmatian_FeaturedImage.jpg",
      about:
        "Maggie is a lively Dalmatian who loves to run and play. She is very friendly and loves attention.",
    },
    {
      name: "Oscar",
      age: "1.5 years",
      breed: "Labrador Retriever",
      img: "https://www.101dogbreeds.com/wp-content/uploads/2018/10/Labrador-Retriever-Images.jpg",
      about: "Oscar is a strong and playful Boxer. He is loyal and loves to play fetch.",
    },
    {
      name: "Ruby",
      age: "1 year",
      breed: "Shih Tzu",
      img: "https://fuzzy-rescue.com/wp-content/uploads/2022/07/Shih-Tzu.jpg",
      about:
        "Ruby is a sweet Shih Tzu who loves cuddles and being pampered. She is perfect for a loving home.",
    },
    {
      name: "Simba",
      age: "1 year",
      breed: "Doberman",
      img: "https://dgicdplf3pvka.cloudfront.net/1023199/doberman-pinscher-puppy-picture-22be9f49-790c-4ec6-a8dd-d87982aed5e6.jpg",
      about:
        "Simba is a brave Doberman who is very protective of his family. He is well-trained and obedient.",
    },
    {
      name: "Goldie",
      age: "2 years",
      breed: "Golden Retriever",
      img: "https://cdn.pixabay.com/photo/2013/11/28/12/14/dog-220455_960_720.jpg",
      about:
        "Goldie is a playful Golden Retriever puppy who loves to make new friends and is always up for an adventure.",
    },
  ];

  return (
    <div>
      {/* Sticky Navbar */}
      <nav
        className="sticky-navbar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          maxWidth: "100%",
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Left side: PawsFurVive + paw icon */}
        <div
          className="flex items-center gap-2"
          style={{ color: "#D5451B", minWidth: "200px" }}
        >
          <span className="text-3xl font-extrabold tracking-tight font-serif flex items-center gap-2">
            PawsFurVive
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="5.5" cy="10.5" r="2.5" />
              <circle cx="18.5" cy="10.5" r="2.5" />
              <circle cx="12" cy="4.5" r="2.5" />
              <ellipse cx="12" cy="17" rx="5" ry="7" />
            </svg>
          </span>
        </div>

        {/* Center side: Pet Adoption title & subtitle */}
        <div style={{ textAlign: "center", flexGrow: 1 }}>
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#1e3a8a",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Pet Adoption
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#475569", margin: 0 }}>
            Adopt your love here
          </p>
        </div>

        {/* Right side empty for spacing */}
        <div style={{ minWidth: "200px" }}></div>
      </nav>

      {/* Dogs Listing */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          padding: "2rem",
          background: "#f8fafc",
        }}
      >
        {dogs.map((dog, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              width: "320px",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.2s",
            }}
          >
            <img
              src={dog.img}
              alt={dog.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "1rem",
              }}
            />
            <h2 style={{ margin: "0.5rem 0", color: "#1e293b" }}>{dog.name}</h2>
            <p style={{ margin: "0.25rem 0", color: "#64748b" }}>
              <strong>Age:</strong> {dog.age}
            </p>
            <p style={{ margin: "0.25rem 0", color: "#64748b" }}>
              <strong>Breed:</strong> {dog.breed}
            </p>
            <p style={{ margin: "0.75rem 0", color: "#334155" }}>{dog.about}</p>
            <button
              style={{
                background:
                  "linear-gradient(90deg, #fbbf24 0%, #f59e42 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "0.75rem 1.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "auto",
                fontSize: "1rem",
                boxShadow: "0 2px 8px rgba(251,191,36,0.15)",
              }}
            >
              <Link
                to="/dashboard/form"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Adopt Me
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


