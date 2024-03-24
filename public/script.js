/* 
    Created by Chrissy Dobrowolski 
    Assignment 14- Reading Server Side JSON 
    CSCE 242- 001 
    Due: 3.24.2024 

*/


const getCrafts = async() =>
{
    try
    {
        // let response = await fetch("http://localhost:3000/api/crafts");
        let response = await fetch("https://csce242assignment14server.onrender.com");
        return await response.json();

    }
    catch(error)
    {
        console.log("There was an error retrieving the data");


        return "";

    }

};

const showCrafts = async() =>
{
    // FOR TESTING: console.log("Testing");
    // console.log(craftsJSON);

    craftsJSON = await getCrafts();

    const craftsDiv = document.getElementById("crafts");

    if(craftsJSON == "")
    {
        craftsDiv.innerHTML = "There is no data to display"
    

        return;

    }

    const pageTitle = document.createElement("h1");
    pageTitle.innerHTML = "Buy and Sell Crafts";
    craftsDiv.append(pageTitle);

    const plusSignImage = document.createElement("img");
    plusSignImage.classList.add("plus-sign-image");
    plusSignImage.src = "images/plus_sign_image.png";
    craftsDiv.append(plusSignImage);

    const craftsContainer = document.createElement("section");
    craftsContainer.classList.add("crafts-container");
    craftsDiv.append(craftsContainer);

    let craftSection;

    for(let i=0; i<4; i++)
    {
        craftSection = document.createElement("section");
        craftSection.classList.add(`craft-section${i}`);
        craftsContainer.append(craftSection);

    }


    craftsJSON.forEach((craft) => 
    {
        // FOR TESTING: console.log(craft);

        const craftSection0 = document.querySelector(".craft-section0");
        craftSection0.classList.add("craft-section0");
        // FOR TESTING: console.log(craftSection0);

        const craftSection1 = document.querySelector(".craft-section1");
        craftSection1.classList.add("craft-section1");

        const craftSection2 = document.querySelector(".craft-section2");
        craftSection2.classList.add("craft-section2");

        const craftSection3 = document.querySelector(".craft-section3");
        craftSection3.classList.add("craft-section3");


        // Places crafts in the first section 
        if((craft.id == "0"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "4"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "8"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "12"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "16"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "20"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "24"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection0.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }


        // Places crafts the second section 
        if((craft.id == "1"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "5"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "9"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "13"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "17"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "21"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection1.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }


        // Places crafts the third section 
        if((craft.id == "2"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "6"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "10"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "14"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "18"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "22"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection2.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }


        // Places crafts the fourth section 
        if((craft.id == "3"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "7"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "11"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "15"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "19"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftImage.classList.add("ferris-wheel-image")
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image", "expanded-ferris-wheel-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        }
        if((craft.id == "23"))
        {
            const craftImage = document.createElement("img");
            craftImage.src = "http://localhost:3000/crafts/" + craft.image;
            craftSection3.append(craftImage);

            craftImage.onclick = (event) =>
            {
                // FOR TESTING: console.log("Clicked");
    
                document.getElementById("crafts-modal").style.display = "block";
            

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";
    
                const expandedCraftNameh3 = document.createElement("h2");
                expandedCraftNameh3.classList.add("inline");
                expandedCraftNameh3.innerHTML = craft.name;
                expandedInfoSection.append(expandedCraftNameh3);

                const pencilImage = document.createElement("img")
                pencilImage.classList.add("edit-pencil-image");
                pencilImage.src = "images/edit_pencil_image.png";
                expandedInfoSection.append(pencilImage);

                const expandedCraftDescriptionP = document.createElement("p");
                expandedCraftDescriptionP.innerHTML = craft.description;
                expandedInfoSection.append(expandedCraftDescriptionP);

                const expandedCraftSuppliesTitle = document.createElement("h3")
                expandedCraftSuppliesTitle.innerHTML = "Supplies:"
                expandedInfoSection.append(expandedCraftSuppliesTitle);

                const expandedCraftSuppliesUl = document.createElement("ul");
                
                for(let i=0; i<craft.supplies.length; i++)
                {
                    const expandedCraftSuppliesP = document.createElement("li");

                    expandedCraftSuppliesP.append(craft.supplies[i]);
                    
                    expandedCraftSuppliesUl.append(expandedCraftSuppliesP);
                    
                };
                
                expandedInfoSection.append(expandedCraftSuppliesUl);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedImage = document.createElement("img");
                expandedImage.classList.add("expanded-craft-image");
                expandedImage.src = "http://localhost:3000/crafts/" + craft.image;
                expandedImageSection.append(expandedImage);
    
            };

        };

    });

};

document.getElementById("modal-close").onclick = () =>
{
    // console.log("Clicked");
    document.getElementById("crafts-modal").style.display = "none";

}


showCrafts();