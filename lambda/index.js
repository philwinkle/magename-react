'use strict';
const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });
const filePaths = ['lib/dictionary/noun.txt', 'lib/dictionary/verb.txt'];

exports.handler = (event, context, callback) => {

    //0 => noun; 1 => verb
    let termOrder = Math.round(Math.random(), 0);
    let params = {
        Bucket: 'magename.me',
        Key: filePaths[termOrder],
    };

    s3.getObject(params, (err, data) => {
        if (err) {
            console.log(err);
            const message = `Error getting object ${params.Key} from bucket ${params.Bucket}`;
            console.log(message);
            callback(message);
        } else {
            let lines = data.Body.toString('ascii').split("\n");
            let randomLine = lines[Math.floor(Math.random() * lines.length)];
            callback(null, { "phrase": getFormattedLine(termOrder, randomLine)});
        }
    });
};

function getFormattedLine(termOrder, word)
{
    word = word.charAt(0).toUpperCase() + word.slice(1);
    
    if(termOrder){
        return `${word}Gento`;
    }

    return `Mage${word}`;
}