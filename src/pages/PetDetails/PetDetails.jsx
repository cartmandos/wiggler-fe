import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Card, CardContent, Container, CardMedia, Typography } from '@mui/material';

import { getPet } from '@lib/api/pets';

import dogImage from '@assets/images/pets/dog_01.jpg';

export default function PetDetails() {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const res = await getPet(id);
        console.log(res);
        setPet(res.pet);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPet();
  }, []);

  //pet props:
  // "status": "Available",
  // "type": "Cat",
  // "name": "Buddy",
  // "breed": "Border Collie",
  // "color": "red",
  // "age": 163,
  // "gender": "Female",
  // "weight": 33,
  // "photoUrl": "http://icq.com/eu/interdum.html?nullam=vestibulum&sit=sagittis&amet=sapien&turpis=cum&elementum=sociis&ligula=natoque&vehicula=penatibus&consequat=et&morbi=magnis&a=dis&ipsum=parturient&integer=montes&a=nascetur&nibh=ridiculus&in=mus&quis=etiam&justo=vel&maecenas=augue&rhoncus=vestibulum&aliquam=rutrum&lacus=rutrum&morbi=neque&quis=aenean&tortor=auctor&id=gravida&nulla=sem&ultrices=praesent&aliquet=id&maecenas=massa&leo=id&odio=nisl&condimentum=venenatis&id=lacinia&luctus=aenean&nec=sit&molestie=amet&sed=justo&justo=morbi&pellentesque=ut&viverra=odio&pede=cras&ac=mi&diam=pede&cras=malesuada&pellentesque=in",
  // "description": "",
  // "dietaryRestrictions": "None",
  // "hypoallergenic": false,
  // "goodWithChildren": false,
  // "goodWithDogs": null,
  // "goodWithCats": null,
  // "isPublished": true,
  // "publisherId": "486c9171-ec95-4c70-a9f9-65a1a9a2ff59",
  // "createdAt": "2023-06-15T01:52:02.264Z",
  // "updatedAt": "2023-06-15T01:52:02.264Z"

  return (
    //   show all pet details
    <Container>
      <Card sx={{ maxWidth: 360 }} className="PetsContainer">
        <CardMedia component="img" alt={pet?.name} height="100%" width="100%" image={dogImage} />
        <CardContent>
          <div className="PetDetails__basic">
            <Typography variant="h5" component="div">
              {pet.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pet.breed}
            </Typography>
          </div>

          <div className="PetDetails__age">
            <Typography variant="body1" component="div">
              Age
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pet.age}
            </Typography>
          </div>

          <div className="PetDetails__sex">
            <Typography variant="body1" component="div">
              Sex
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pet.gender}
            </Typography>
          </div>

          <div className="PetDetails__bio">
            <Typography variant="body1" component="div">
              Bio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pet.description}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}

/* 
The Pet Page component will display all the pet details of a specific pet. 
These details will include the pet's type (dog, cat), 
name, adoption status, picture, height, weight, color, 
bio, hypoallergenic (yes/no), dietary restrictions, 
and breed of animal (Poodle, Siamese). 
There will be a button for the owner of the pet to 
return the pet to the adoption center (if they are fostering the pet or adopted it).
 If the person is not the owner, they will see a button to adopt and a button to foster.
  If they are already fostering, they will see a button to adopt.
   There will also be an additional button to save for later (or unsave if already saved). 
   */
