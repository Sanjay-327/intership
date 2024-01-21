 function addOpportunity() {
            const position = document.getElementById('position').value;
            const description = document.getElementById('description').value;

            // Create a new internship card
            const internshipCard = document.createElement('div');
            internshipCard.className = 'internship-card';

            const internshipDetails = document.createElement('div');
            internshipDetails.className = 'internship-details';

            const heading = document.createElement('h3');
            heading.textContent = position;

            const paragraph = document.createElement('p');
            paragraph.textContent = description;

            const applyLink = document.createElement('a');
            applyLink.href = '#';
            applyLink.textContent = 'Apply Now';

            // Append elements to the card
            internshipDetails.appendChild(heading);
            internshipDetails.appendChild(paragraph);
            internshipDetails.appendChild(applyLink);

            internshipCard.appendChild(internshipDetails);

            // Insert the new card before the form
            const currentOpeningsSection = document.querySelector('section:nth-of-type(1)');
            currentOpeningsSection.insertBefore(internshipCard, currentOpeningsSection.firstChild);

            // Clear form fields
            document.getElementById('position').value = '';
            document.getElementById('description').value = '';
        }