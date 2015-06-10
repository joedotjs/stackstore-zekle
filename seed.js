/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

Refer to the q documentation for why and how q.invoke is used.

*/

var mongoose = require('mongoose');
var connectToDb = require('./server/db');
var User = mongoose.model('User');
var Category = mongoose.model('Category');
var Item = mongoose.model('Item');
var Review = mongoose.model('Review');
var Listing = mongoose.model('Listing');
var q = require('q');
var chalk = require('chalk');

var getCurrentUserData = function() {
    return q.ninvoke(User, 'find', {});
};
var seedUsers = function() {

    var users = [{
        name: {
            first: "Jean",
            last: "Holmes"
        },
        phoneNumber: "3-(672)210-7055",
        permissions: "buyer",
       
        photo: "https://soundcloud.com",
        location: {
            lat: 40.707,
            lng: -74
        },
        email: "jholmes0@wikipedia.org",
        password: "arl0IMN"
    }, {
        name: {
            first: "Phillip",
            last: "Turner"
        },
        phoneNumber: "0-(844)144-8187",
        permissions: "buyer",
       
        photo: "http://cornell.edu",
        location: {
            lat: 40.708,
            lng: -74.019
        },
        email: "pturner1@spiegel.de",
        password: "pik6mk"
    }, {
        name: {
            first: "Nicole",
            last: "Palmer"
        },
        phoneNumber: "0-(984)656-2198",
        permissions: "buyer",
       
        photo: "http://nytimes.com",
        location: {
            lat: 40.701,
            lng: -74.016
        },
        email: "npalmer2@narod.ru",
        password: "63S24ubRsh"

    }];
    return q.invoke(User, 'create', users);
};
var seedItems = function() {
    var items = [{
        title: "pede justo",
        description: "Donec dapibus. Duis at velit eu est congue elementum.",
        category: new Category({name:'category 4'}),
        numOfStars: 3
    // }, {
    //     title: "ac nulla",
    //     description: "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    //     numOfStars: 1,
    // }, {
    //     title: "lorem ipsum",
    //     description: "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    //     numOfStars: 1,
    // }, {
    //     title: "mauris",
    //     description: "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    //     numOfStars: 1,
    // }, {
    //     title: "donec semper",
    //     description: "Nulla nisl. Nunc nisl.",
    //     numOfStars: 4,
    // }, {
    //     title: "odio condimentum",
    //     description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    //     numOfStars: 2,

    }]
    return q.invoke(Item, 'create', items);
};
var seedCategories = function() {
    var categories = [{
        name: "posuere"
    }, {
        name: "diam id"
    }, {
        name: "neque"
    }, {
        name: "vel"
    }, {
        name: "eu"
    }, {
        name: "in porttitor"
    }, {
        name: "sapien non"
    }];
    return q.invoke(Category, 'create', categories);
};
var seedReviews = function() {
    var reviews = [{
        rating: 3,
        comments: "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        item: new Item({title:"item 2", description:"description 2",numOfStars:3,category:new Category({name:'category 1'})}),

    // }, {
    //     rating: 2,
    //     comments: "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    // }, {
    //     rating: 4,
    //     comments: "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    // }, {
    //     rating: 5,
    //     comments: "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    // }, {
    //     rating: 5,
    //     comments: "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    // }, {
    //     rating: 4,
    //     comments: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    // }, {
    //     rating: 3,
    //     comments: "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    }]
    return q.invoke(Review, 'create', reviews);

};
var seedListings = function() {
    var listings = [{
        title: "Banana",
        quantity: 49,
        price: "321.05",
        description:"For decades I have been trying to come up with an ideal way to slice a banana. \"Use a knife!\" they say. Well...my parole officer won't allow me to be around knives. \"Shoot it with a gun!\" Background check...HELLO! I had to resort to carefully attempt to slice those bananas with my bare hands. 99.9% of the time, I would get so frustrated that I just ended up squishing the fruit in my hands and throwing it against the wall in anger. Then, after a fit of banana-induced rage, my parole officer introduced me to this kitchen marvel and my life was changed. No longer consumed by seething anger and animosity towards thick-skinned yellow fruit, I was able to concentrate on my love of theatre and am writing a musical play about two lovers from rival gangs that just try to make it in the world. I think I'll call it South Side Story. Banana slicer...thanks to you, I see greatness on the horizon.",
        photoUrl:"https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg",
        item: [ new Item({title:"Item1", description: " Description 1", category:new Category({name:'category 1'})})],
        user: new User({name:{first:"user",last:"one"}})
    },
    {
        title: "Banana",
        quantity: 49,
        price: "321.05",
        description:"For decades I have been trying to come up with an ideal way to slice a banana. \"Use a knife!\" they say. Well...my parole officer won't allow me to be around knives. \"Shoot it with a gun!\" Background check...HELLO! I had to resort to carefully attempt to slice those bananas with my bare hands. 99.9% of the time, I would get so frustrated that I just ended up squishing the fruit in my hands and throwing it against the wall in anger. Then, after a fit of banana-induced rage, my parole officer introduced me to this kitchen marvel and my life was changed. No longer consumed by seething anger and animosity towards thick-skinned yellow fruit, I was able to concentrate on my love of theatre and am writing a musical play about two lovers from rival gangs that just try to make it in the world. I think I'll call it South Side Story. Banana slicer...thanks to you, I see greatness on the horizon.",
        photoUrl:"https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg",
        item: [ new Item({title:"Item1", description: " Description 1", category:new Category({name:'category 1'})})],
        user: new User({name:{first:"user",last:"one"}})
    },
    {
        title: "Banana",
        quantity: 49,
        price: "321.05",
        description:"For decades I have been trying to come up with an ideal way to slice a banana. \"Use a knife!\" they say. Well...my parole officer won't allow me to be around knives. \"Shoot it with a gun!\" Background check...HELLO! I had to resort to carefully attempt to slice those bananas with my bare hands. 99.9% of the time, I would get so frustrated that I just ended up squishing the fruit in my hands and throwing it against the wall in anger. Then, after a fit of banana-induced rage, my parole officer introduced me to this kitchen marvel and my life was changed. No longer consumed by seething anger and animosity towards thick-skinned yellow fruit, I was able to concentrate on my love of theatre and am writing a musical play about two lovers from rival gangs that just try to make it in the world. I think I'll call it South Side Story. Banana slicer...thanks to you, I see greatness on the horizon.",
        photoUrl:"https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg",
        item: [ new Item({title:"Item1", description: " Description 1", category:new Category({name:'category 1'})})],
        user: new User({name:{first:"user",last:"one"}})
    },{
        title: "Banana",
        quantity: 49,
        price: "321.05",
        description:"For decades I have been trying to come up with an ideal way to slice a banana. \"Use a knife!\" they say. Well...my parole officer won't allow me to be around knives. \"Shoot it with a gun!\" Background check...HELLO! I had to resort to carefully attempt to slice those bananas with my bare hands. 99.9% of the time, I would get so frustrated that I just ended up squishing the fruit in my hands and throwing it against the wall in anger. Then, after a fit of banana-induced rage, my parole officer introduced me to this kitchen marvel and my life was changed. No longer consumed by seething anger and animosity towards thick-skinned yellow fruit, I was able to concentrate on my love of theatre and am writing a musical play about two lovers from rival gangs that just try to make it in the world. I think I'll call it South Side Story. Banana slicer...thanks to you, I see greatness on the horizon.",
        photoUrl:"https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg",
        item: [ new Item({title:"Item1", description: " Description 1", category:new Category({name:'category 1'})})],
        user: new User({name:{first:"user",last:"one"}})
    },{
        title: "Banana",
        quantity: 49,
        price: "321.05",
        description:"For decades I have been trying to come up with an ideal way to slice a banana. \"Use a knife!\" they say. Well...my parole officer won't allow me to be around knives. \"Shoot it with a gun!\" Background check...HELLO! I had to resort to carefully attempt to slice those bananas with my bare hands. 99.9% of the time, I would get so frustrated that I just ended up squishing the fruit in my hands and throwing it against the wall in anger. Then, after a fit of banana-induced rage, my parole officer introduced me to this kitchen marvel and my life was changed. No longer consumed by seething anger and animosity towards thick-skinned yellow fruit, I was able to concentrate on my love of theatre and am writing a musical play about two lovers from rival gangs that just try to make it in the world. I think I'll call it South Side Story. Banana slicer...thanks to you, I see greatness on the horizon.",
        photoUrl:"https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg",
        item: [ new Item({title:"Item1", description: " Description 1", category:new Category({name:'category 1'})})],
        user: new User({name:{first:"user",last:"one"}})
    },{
        title: "Banana",
        quantity: 49,
        price: "321.05",
        description:"For decades I have been trying to come up with an ideal way to slice a banana. \"Use a knife!\" they say. Well...my parole officer won't allow me to be around knives. \"Shoot it with a gun!\" Background check...HELLO! I had to resort to carefully attempt to slice those bananas with my bare hands. 99.9% of the time, I would get so frustrated that I just ended up squishing the fruit in my hands and throwing it against the wall in anger. Then, after a fit of banana-induced rage, my parole officer introduced me to this kitchen marvel and my life was changed. No longer consumed by seething anger and animosity towards thick-skinned yellow fruit, I was able to concentrate on my love of theatre and am writing a musical play about two lovers from rival gangs that just try to make it in the world. I think I'll call it South Side Story. Banana slicer...thanks to you, I see greatness on the horizon.",
        photoUrl:"https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg",
        item: [ new Item({title:"Item1", description: " Description 1", category:new Category({name:'category 1'})})],
        user: new User({name:{first:"user",last:"one"}})
    },{
        title: "Banana",
        quantity: 49,
        price: "321.05",
        description:"For decades I have been trying to come up with an ideal way to slice a banana. \"Use a knife!\" they say. Well...my parole officer won't allow me to be around knives. \"Shoot it with a gun!\" Background check...HELLO! I had to resort to carefully attempt to slice those bananas with my bare hands. 99.9% of the time, I would get so frustrated that I just ended up squishing the fruit in my hands and throwing it against the wall in anger. Then, after a fit of banana-induced rage, my parole officer introduced me to this kitchen marvel and my life was changed. No longer consumed by seething anger and animosity towards thick-skinned yellow fruit, I was able to concentrate on my love of theatre and am writing a musical play about two lovers from rival gangs that just try to make it in the world. I think I'll call it South Side Story. Banana slicer...thanks to you, I see greatness on the horizon.",
        photoUrl:"https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg",
        item: [ new Item({title:"Item1", description: " Description 1", category:new Category({name:'category 1'})})],
        user: new User({name:{first:"user",last:"one"}})
    },{
        title: "Banana",
        quantity: 49,
        price: "321.05",
        description:"For decades I have been trying to come up with an ideal way to slice a banana. \"Use a knife!\" they say. Well...my parole officer won't allow me to be around knives. \"Shoot it with a gun!\" Background check...HELLO! I had to resort to carefully attempt to slice those bananas with my bare hands. 99.9% of the time, I would get so frustrated that I just ended up squishing the fruit in my hands and throwing it against the wall in anger. Then, after a fit of banana-induced rage, my parole officer introduced me to this kitchen marvel and my life was changed. No longer consumed by seething anger and animosity towards thick-skinned yellow fruit, I was able to concentrate on my love of theatre and am writing a musical play about two lovers from rival gangs that just try to make it in the world. I think I'll call it South Side Story. Banana slicer...thanks to you, I see greatness on the horizon.",
        photoUrl:"https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg",
        item: [ new Item({title:"Item1", description: " Description 1", category:new Category({name:'category 1'})})],
        user: new User({name:{first:"user",last:"one"}})
    },{
        title: "Banana",
        quantity: 49,
        price: "321.05",
        description:"For decades I have been trying to come up with an ideal way to slice a banana. \"Use a knife!\" they say. Well...my parole officer won't allow me to be around knives. \"Shoot it with a gun!\" Background check...HELLO! I had to resort to carefully attempt to slice those bananas with my bare hands. 99.9% of the time, I would get so frustrated that I just ended up squishing the fruit in my hands and throwing it against the wall in anger. Then, after a fit of banana-induced rage, my parole officer introduced me to this kitchen marvel and my life was changed. No longer consumed by seething anger and animosity towards thick-skinned yellow fruit, I was able to concentrate on my love of theatre and am writing a musical play about two lovers from rival gangs that just try to make it in the world. I think I'll call it South Side Story. Banana slicer...thanks to you, I see greatness on the horizon.",
        photoUrl:"https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg",
        item: [ new Item({title:"Item1", description: " Description 1", category:new Category({name:'category 1'})})],
        user: new User({name:{first:"user",last:"one"}})
    }];
    return q.invoke(Listing, 'create', listings);
};
// var relateUserToReviews = function(){
//     User.find({}).exec().then(function(users){
//         Category.find({}).exec().then(function(categories){
//             console.log("categories found");
//             console.log(users[0]);
//             users[0].buyerOf.categories.push(categories[0]._id).save().then(function(){console.log("")});
//         })
//     })
// }


// var relateListingToItem = function(){
//     Listing.find({}).exec().then(function(listings){
//         Item.find({}).exec().then(function(items){
//             console.log(listings.length + " listings found");
//             console.log(items.length + " items found");
//             listings[0].item.push(items[0]._id).save().then(function(){console.log('made it')});
//         })
//     })

// }
// relateListingToItem();
// relateUserToReviews();

connectToDb.then(function() {
            getCurrentUserData().then(function(users) {
                if (users.length === 0) {
                    return seedUsers();
                } else {
                    console.log(chalk.magenta('Seems to already be user data, exiting!'));
                    process.kill(0);
                }
            }).then(function() {
                console.log(chalk.green("seeding item"));
                return seedItems();
            }).then(function() {
                return seedCategories();
            }).then(function() {
                return seedListings();
            }).then(function() {
                return seedReviews();
            }).then(function() {
                console.log(chalk.green('Seed successful!'));
                process.kill(0);
            }).catch(function(err) {
                console.error(err);
                process.kill(1);
            });
        })