### Front-end Functional Requirements

1. **Homepage (Logged out)**: A homepage that is displayed when the user is not logged in. It should include:

- **Login/Signup button**: A button that allows the user to either log in or sign up for an account.
- **Login/Signup modal**: A modal that appears when the button is clicked, which allows the user to either log in or sign up.
- **Header**: A header that welcomes the user to the site.
- **Text**: A section that explains what the service is.
- **Link**: A link that directs the user to the search page.

2. **Signup Component**: A component that allows the user to sign up for an account. It should include:

- **Email Address**: A field where the user can enter their email address.
- **Password**: A field where the user can enter their password.
- **Confirm Password**: A field where the user can confirm their password.
- **First Name**: A field where the user can enter their first name.
- **Last Name**: A field where the user can enter their last name.
- **Phone Number**: A field where the user can enter their phone number.

3. **Login Component**: A component that allows the user to log in to their account. It should include:

- **Email Address**: A field where the user can enter their email address.
- **Password**: A field where the user can enter their password.

4. **Homepage (Logged In)**: A homepage that is displayed when the user is logged in. It should include:

- **Header**: A header that welcomes the user by their first and last name.
- **Search Button**: A button that allows the user to search for pets. This can either be a link to the search page or a button that opens a modal of the search component.
- **Link**: A link that directs the user to their "My Pets" page.
- **Link**: A link that allows the user to navigate to their profile settings.

5. **Profile Settings**: A component that allows the user to edit their profile settings. It should include:

- **Form**: A form that allows the user to edit their password, email address, first name, last name, phone number, and add a short bio.
- **Save Button**: A button that allows the user to save any changes made.

6. **My Pets Page**: A page that displays all the pets the user owns or fosters. It should include:

- **Toggle**: A toggle that allows the user to switch between their pets and saved pets.
- **Text**: A section that displays a message if the user doesn't have any pets.
- **Cards**: A section that displays all the pets the user owns or fosters. Each card should display an image of the pet, the pet's name, and their current status (foster/adopted).
- **See More Button**: A button that takes the user to a full detailed description of the pet.

7. **Pet Page**: A page that displays all the details of a specific pet. It should include:

- **Type**: A section that displays the type of animal (dog, cat).
- **Name**: A section that displays the name of the pet.
- **Adoption Status**: A section that displays the adoption status of the pet.
- **Picture**: A section that displays a picture of the pet.
- **Height**: A section that displays the height of the pet.
- **Weight**: A section that displays the weight of the pet.
- **Color**: A section that displays the color

UX/UI Requirements:
1. User Registration and Login:
   The system should provide a registration and login mechanism that allows new users to create accounts and existing users to login. The registration form should require the user to provide their email address, password, first and last name, and phone number. The login form should require the user to enter their email address and password. The system should validate all user input and ensure that the email address is unique.

2. Homepage:
   The system should have a homepage that displays a header welcoming users to the site and provides a brief description of the service. The homepage should also have a login/signup button that triggers a modal with a login/signup form.

3. User Profile:
   The system should allow users to view and edit their profile settings. The profile settings form should include fields for the user's password, email, first name, last name, phone number, and a short bio. The user should be able to save any changes they make to their profile.

4. My Pets Page:
   The system should provide a page where users can view all the pets they own or foster. The page should have a toggle that allows the user to switch between pets they own and pets they have saved for later. Each pet should be displayed in a card component that includes an image of the pet, the pet's name, and the pet's current status (fostered or adopted). The user should be able to click on the card to view a detailed description of the pet.

5. Pet Details:
   The system should provide a page that displays all the details of a specific pet. The details should include the type of animal, name, adoption status, picture, height, weight, color, bio, hypoallergenic status, dietary restrictions, and breed. If the user is the owner of the pet, they should see a button to return the pet to the adoption center. If the user is not the owner, they should see a button to adopt or foster the pet, depending on its adoption status. The user should also be able to save the pet for later.

6. Search Page:
   The system should provide a search page where users can search for pets based on their type, adoption status, height, weight, and name. The search page should display the search results in a list of animal card components that link to the pet details page.

7. Admin Pages:
   The system should provide two admin pages: the add pet page and the dashboard page. The add pet page should allow administrators to add new pets to the system. The dashboard page should display a list of all the users in the database (pet owners and administrators) and allow administrators to view all the pets that a user owns, along with their profile details.
