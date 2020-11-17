import React, {useEffect, useState} from 'react';

const Progress = () => {
    const [style, setStyle] = useState();
    const [done] = useState([0, 10, 25, 55, 80, 100]);
    const [gauge, setGauge] = useState(0);

    let delay = 900;

    useEffect(() => {
        (gauge === 0 && (delay = 4600));
        setTimeout(() => {
            setStyle({
                opacity: 1,
                width: `${done[gauge+1]}%`
            });
            setGauge(gauge+1);
        }, delay);
    }, [gauge]);

    return (
        <div className="progress">
            <div className="progress-done" style={style} />
        </div>
    );
};

function ProgressBar() {
    return (
        <Progress />
    );
}

export default ProgressBar;
