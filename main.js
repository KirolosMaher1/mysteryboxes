const boxes = document.querySelectorAll('.box');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup');
const popupResult = document.getElementById('popup-result');
const popupPhoto = document.getElementById('popup-photo');
const popupPrize = document.getElementById('popup-prize');


const boxColors = {
	box1: '#ff5733',
	box2: '#c70039',
	box3: '#900c3f',
	box4: '#581845',
	box5: '#2c3e50',
	box6: '#2980b9',
	box7: '#8e44ad',
	box8: '#d35400',
	box9: '#27ae60'
};



const boxPrizes = {
	box1: {
		prize: 'First Prize',
		photo: 'https://res.cloudinary.com/drxtznl4x/image/upload/v1686203387/WhatsApp_Image_2023-05-22_at_3.46.19_PM_p5onr4.jpg'
	},
	box2: {
		prize: 'Second Prize',
		photo: 'https://res.cloudinary.com/drxtznl4x/image/upload/v1686203387/WhatsApp_Image_2023-05-22_at_3.46.20_PM_eskciq.jpg'
	},
	box3: {
		prize: 'Third Prize',
		photo: 'https://res.cloudinary.com/drxtznl4x/image/upload/v1686203386/WhatsApp_Image_2023-05-22_at_3.46.21_PM_js64l1.jpg'
	},
	box4: {
		prize: 'Fourth Prize',
		photo: 'https://res.cloudinary.com/drxtznl4x/image/upload/v1686203387/WhatsApp_Image_2023-05-22_at_3.46.24_PM_xrdcfz.jpg'
	},
	box5: {
		prize: 'Fifth Prize',
		photo: 'https://res.cloudinary.com/drxtznl4x/image/upload/v1686203387/WhatsApp_Image_2023-05-22_at_3.46.23_PM_xogqcs.jpg'
	},
	box6: {
		prize: 'Sixth Prize',
		photo: 'https://res.cloudinary.com/drxtznl4x/image/upload/v1686203387/WhatsApp_Image_2023-05-22_at_3.46.18_PM_1_lulipf.jpg'
	},
	box7: {
		prize: 'Seventh Prize',
		photo: 'https://res.cloudinary.com/drxtznl4x/image/upload/v1686203387/WhatsApp_Image_2023-05-22_at_3.46.17_PM_w0xuga.jpg'
	},
	box8: {
		prize: 'Eighth Prize',
		photo: 'https://res.cloudinary.com/drxtznl4x/image/upload/v1686203388/WhatsApp_Image_2023-05-22_at_3.46.18_PM_z9ucgj.jpg'
	},
	box9: {
		prize: 'Ninth Prize',
		photo: 'https://res.cloudinary.com/drxtznl4x/image/upload/v1686203387/WhatsApp_Image_2023-05-22_at_3.46.22_PM_g7uz8i.jpg'
	}
};

let openedBoxId = localStorage.getItem('openedBoxId');


shuffleBoxes();

boxes.forEach(box => {
	box.addEventListener('click', () => {

		if (openedBoxId) {
			alert('You can only open one box!');
		} else {
			box.classList.add('open');
			openedBoxId = box.id;
			localStorage.setItem('openedBoxId', openedBoxId);
			box.style.backgroundColor = boxColors[openedBoxId];
			const result = checkResult();
			const prize = boxPrizes[openedBoxId].prize;
			const photo = boxPrizes[openedBoxId].photo;
			showPopup(result, prize, photo);
		}
	});
});

playAgainBtn.addEventListener('click', () => {
	boxes.forEach(box => {
		box.classList.remove('open');
		box.style.backgroundColor = '#ddd';
	});
	popup.style.display = 'none';
	openedBoxId = null;
	localStorage.removeItem('openedBoxId');


	shuffleBoxes();
});

function checkResult() {
	if (openedBoxId === 'box1') {
		return Math.random() < 0.5 ? 'win' : 'lose';
	} else if (openedBoxId === 'box2') {
		return Math.random() < 0.3 ? 'win' : 'lose';
	} else if (openedBoxId === 'box3') {
		return Math.random() < 0.2 ? 'win' : 'lose';
	} else if (openedBoxId === 'box4') {
		return Math.random() < 0.5 ? 'win' : 'lose';
	} else if (openedBoxId === 'box5') {
		return Math.random() < 0.3 ? 'win' : 'lose';
	} else if (openedBoxId === 'box6') {
		return Math.random() < 0.2 ? 'win' : 'lose';
	} else if (openedBoxId === 'box7') {
		return Math.random() < 0.5 ? 'win' : 'lose';
	} else if (openedBoxId === 'box8') {
		return Math.random() < 0.3 ? 'win' : 'lose';
	} else if (openedBoxId === 'box9') {
		return Math.random() < 0.2 ? 'win' : 'lose';
	}
}

function showPopup(result, prize, photo) {
	popupResult.textContent = result === 'win' ? 'Congratulations, you won!' : 'Congratulations, you won!';
	popupPhoto.src = photo;
	popupPrize.textContent = prize;
	popup.style.display = 'block';
}

function shuffleBoxes() {
    for (let i = boxes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      boxes[i].style.order = j;
      boxes[j].style.order = i;
    }
  }


document.querySelector('.close').addEventListener('click', () => {
	popup.style.display = 'none';
});