cardArr = [];
let randomNumber;
let user;

function onGenerate() {
    randomNumber = Math.floor(Math.random()* 25645367989) + 1;
    answer.value = randomNumber;
}

function onSave() {
    answer.value = '';

    user = {
    network: pick.value,
    amount: price.value,
    pin: '',
    status: 'Unused',
    dateCredited: new Date().toLocaleDateString(),
    dateUsed: 'Not yet used',
    }
    if(pick.value === 'glo'){
        user.pin = `*777*${randomNumber}#`
    }else if(pick.value === 'mtn'){
        user.pin = `*555*${randomNumber}#`
    }else if(pick.value === 'airtel'){
        user.pin = `*123*${randomNumber}#`
    } else if (pick.value === '9mobile'){
        user.pin = `*999*${randomNumber}#`
    } else{
        alert('Select a Network')
    }

    cardArr.push(user); 
    console.log(cardArr);

    updateUi()
    
}

function updateUi(){
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = '';

    cardArr.forEach((items, index) => {
        tableBody.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${items.network}</td>
        <td>${items.amount}</td>
        <td>${items.pin}</td>
        <td>${items.status}</td>
        <td>${items.dateCredited}</td>
        <td>${items.dateUsed}</td>
        <td><button onclick="del(${index})" style="background-color: red; border: none; margin-left: 4px; padding: 6px;">Delete</button></td>
        </tr>
        `
    })
}


function del(index){
    cardArr.splice(index, 1)

    updateUi();
}

function onProcess() {
    let show = document.getElementById('show');
    let index = cardArr.findIndex((items) => show.value === items.pin);
    console.log(index);

    if(index !== -1) {
        let today = new Date().toLocaleDateString();
        cardArr[index].status = 'used';
        cardArr[index].dateUsed = today;
        alert('Recharge successful');
    } else{
        alert('invalid pin');
    }
    
    updateUi();
    
}