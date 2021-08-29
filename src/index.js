const content = document.querySelector('#content');
content.classList.add('homeJS');
content.innerHTML = `<div>
                        <div>
                            <h2 style="text-decoration: underline;"> ${home()[0].reviewer} </h2>
                            <p style="font-size: 25px;"> ${home()[0].review} </p>
                        </div>
                        <br>
                        <div>
                            <h2 style="text-decoration: underline;"> Timings </h2>
                            <div> Sunday : ${home()[1][1].time} </div>
                            <div> Monday : ${home()[1][2].time} </div>
                            <div> Tuesday : ${home()[1][3].time} </div>
                            <div> Wednesday : ${home()[1][4].time} </div>
                            <div> Thursday : ${home()[1][5].time} </div>
                            <div> Friday : ${home()[1][6].time} </div>
                            <div> Saturday : ${home()[1][7].time} </div>
                        </div>
                        <br>
                        <div>
                            <h2 style="text-decoration: underline;"> Location </h2>
                            <div>
                                ${home()[2].location}
                            </div>
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.090201146521!2d-122.26473518434754!3d37.7879258191752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f87c6886403f9%3A0xb9075a138363c87!2zU8O8c3N5IEJha8OhIFBvaW50ZQ!5e0!3m2!1sen!2sin!4v1630123727866!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>`;

import { home } from "./home";
const homeClick = document.querySelector('#home');
homeClick.addEventListener('click', () => {
    console.log(home());
    content.classList.add('homeJS');
    content.classList.remove('menuJS');
    content.classList.remove('contactJS');
    content.innerHTML = `<div>
                            <div>
                                <h2 style="text-decoration: underline;"> ${home()[0].reviewer} </h2>
                                <p style="font-size: 25px;"> ${home()[0].review} </p>
                            </div>
                            <br>
                            <div>
                                <h2 style="text-decoration: underline;"> Timings </h2>
                                <div> Sunday : ${home()[1][1].time} </div>
                                <div> Monday : ${home()[1][2].time} </div>
                                <div> Tuesday : ${home()[1][3].time} </div>
                                <div> Wednesday : ${home()[1][4].time} </div>
                                <div> Thursday : ${home()[1][5].time} </div>
                                <div> Friday : ${home()[1][6].time} </div>
                                <div> Saturday : ${home()[1][7].time} </div>
                            </div>
                            <br>
                            <div>
                                <h2 style="text-decoration: underline;"> Location </h2>
                                <div>
                                    ${home()[2].location}
                                </div>
                                <div class="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.090201146521!2d-122.26473518434754!3d37.7879258191752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f87c6886403f9%3A0xb9075a138363c87!2zU8O8c3N5IEJha8OhIFBvaW50ZQ!5e0!3m2!1sen!2sin!4v1630123727866!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                </div>
                        </div>`;
                        
});

import { menu } from "./menu";
const menuClick = document.querySelector('#menu');
menuClick.addEventListener('click', () => {
    console.log("Youve clicked on menu");
    content.classList.add('menuJS');
    content.classList.remove('homeJS');
    content.classList.remove('contactJS');
    content.innerHTML = `<div class="foodMenu">
                            <div class="card my-3" style="width: 25rem;">
                                <img src="${menu()[0].someDish1.image}" class="card-img-top dishImage1" alt="someDish1">
                                <div class="card-body">
                                    <h3 class="card-title">${menu()[0].someDish1.name}</h3>
                                    <p class="card-text">Description : ${menu()[0].someDish1.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">Price : ${menu()[0].someDish1.price}</li>
                                </ul>
                            </div>
                            <div class="card my-3" style="width: 25rem;">
                                <img src="${menu()[0].someDish2.image}" class="card-img-top dishImage2" alt="someDish1">
                                <div class="card-body">
                                    <h3 class="card-title">${menu()[0].someDish2.name}</h3>
                                    <p class="card-text">Description : ${menu()[0].someDish2.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">Price : ${menu()[0].someDish2.price}</li>
                                </ul>
                            </div>
                            <div class="card my-3" style="width: 25rem;">
                                <img src="${menu()[0].someDish3.image}" class="card-img-top dishImage2" alt="someDish1">
                                <div class="card-body">
                                    <h3 class="card-title">${menu()[0].someDish3.name}</h3>
                                    <p class="card-text">Description : ${menu()[0].someDish3.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">Price : ${menu()[0].someDish3.price}</li>
                                </ul>
                            </div>
                            <div class="card my-3" style="width: 25rem;">
                                <img src="${menu()[0].someDish4.image}" class="card-img-top dishImage2" alt="someDish1">
                                <div class="card-body">
                                    <h3 class="card-title">${menu()[0].someDish4.name}</h3>
                                    <p class="card-text">Description : ${menu()[0].someDish4.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">Price : ${menu()[0].someDish4.price}</li>
                                </ul>
                            </div>
                            <div class="card my-3" style="width: 25rem;">
                                <img src="${menu()[0].someDish5.image}" class="card-img-top dishImage2" alt="someDish1">
                                <div class="card-body">
                                    <h3 class="card-title">${menu()[0].someDish5.name}</h3>
                                    <p class="card-text">Description : ${menu()[0].someDish5.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">Price : ${menu()[0].someDish5.price}</li>
                                </ul>
                            </div>
                        </div>`
});

const contactClick = document.querySelector('#contact');
contactClick.addEventListener('click', () => {
    console.log("Youve clicked on contact");
    content.classList.add('contactJS');
    content.classList.remove('menuJS');
    content.classList.remove('homeJS');
    content.innerHTML = `<form class="row g-3">
                            <div class="remarkTitle">
                                <p>Contact Number : xxx-xxx-xxxx</p>
                                <p>Email : Kingsleys@fakeEmail.com</p>
                                <hr>
                            </div>
                            <p class="remarkTitle">Feel free to drop a suggestion, Let us know how we can improve !</p>
                            <div class="col-md-6">
                                <label for="inputName" class="form-label">Name</label>
                                <input type="email" class="form-control" id="inputName">
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4">
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="">
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Suggestion</label>
                                <input type="text" class="form-control" id="inputSuggestion" placeholder="Your Valuable Suggestion helps us improve our service">
                            </div>
                            <div class="col-12">
                                <label for="inputRemark" class="form-label">Remark</label>
                                <input type="text" class="form-control" id="inputRemark" placeholder="Any thing you liked about our restaurant (eg: Service, Music, Food, Environment)">
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputCity">
                            </div>
                            <div class="col-md-6">
                                <label for="inputRating" class="form-label">Rating</label>
                                <input type="text" class="form-control" id="inputRating" placeholder="Rate us">
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>`;
});