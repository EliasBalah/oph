import React, { useState } from 'react';
import './main.scss';

export default function Main() {

    const initialSquares = {
        0: {
            'url': 'localhost:3000/1',
            'piece': '',
            'comment': '',
            'comments':''
        },
        1: {
            'url': 'localhost:3000/1',
            'piece': '',
            'comment': '',
            'comments':''
        },
        2: {
            'url': 'localhost:3000/1',
            'piece': '',
            'comment': '',
            'comments':''
        },
        3: {
            'url': 'localhost:3000/1',
            'piece': '',
            'comment': '',
            'comments':''
        }
    };


    const [squares, setSquares] = useState(initialSquares);


    return (
        <section className="oph-main">
            <div className="oph-main-mainContainer">
                <div className="oph-main-mainContainer-squares">
                    {
                        Object.keys(squares).map(
                            function (square, index) {
                                return <div key={index} className="oph-main-mainContainer-squares-square"></div>
                            }
                        )
                    }
                </div>
            </div>
        </section>
    )
}