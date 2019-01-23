const csdl = require('../models/csdl.model');


// get all
exports.get = async (req, res) => {
    try{
        let result = await csdl.getAll();
        res.send(result);
    }catch(e) {
        console.log(e);
    }  
    // res.send("hello");
};

// store
exports.store = async (req, res) => {
    try{
        //console.log("req.body:",req.body);
        let people = {name: "Jonh",friends : [{firstName: "alice", lastName:"wilson"}] };
        let faceUrl = {group:"Hoi nhung nguoi thich xem phim",url:"HBO.COM", totalClick: 13, timeClikc: []};
        let smsUrl = {url:"SMS.COM", totalClick: 1, timeClick: [new Date()]}
        let object = {people: people, faceUrl : faceUrl, smsUrl: smsUrl};
        
        //let object = {name: "tuan", age: "23", email : "tuan@gmail.com"};
        let result = await csdl.store(object);
        res.send(result);
    } catch(e) {
        console.log(e);
    }
};

//details
exports.detail = async (req, res) => {
    try{
        let result = await csdl.detail(req.params.id);
        res.json(result);
    } catch(e) {
        console.log(e);
    }
};
//update // cai nay danh cho viec sua doi chien dich du an
exports.update = async (req, res) => {
    let people = {name: "update",friends : [{firstName: "alice_update", lastName:"wilson_update"}] };
    let faceUrl = {url:"HBO.COM_update", totalClick: 13, timeClikc: [Date.now]};
    let object = {people: people, faceUrl : faceUrl};
    try{
        let result = await csdl.update(req.params.id, object);
        res.json(result);
    } catch(e) {
        console.log(e);
    }
};
//delete
exports.delete = async (req, res) => {
    try{
        let result = csdl.delete(req.params.id);
        res.json(result);
    } catch (e) {
        console.log(e);
    }
};

//*******************************************************************************

// find newUrl
exports.findNewUrl = async (req, res) => {
    try{
        let result = await csdl.findNewUrl(req.params.newUrl);
        //console.log("result:", result);
        res.json(result);
    } catch (e) {
        console.log(e);
    }
};


