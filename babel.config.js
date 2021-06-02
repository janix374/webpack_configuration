
// runtime sluzi da se ne importuje uvek reakt koj sluzi u jsx fajlovima dakle bez import React from 'react';
module.exports = {
    presets:[
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }]
    ]
}