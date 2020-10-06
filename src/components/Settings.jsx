import React from 'react';

const Settings = (props)=>{
    let user = props.function();
    return (<div className="row">
            <div className="col-sm-3">
                <img src={user.avatar} width="90%" alt=""/>
            </div>
            <div className="col-sm-9">
                <p>{user.name} <span>[изменить]</span></p>
                <p>{user.lastname} <span>[изменить]</span></p>
                <p>Обо мне</p>
                <p>{user.about}<span>[изменить]</span></p>
            </div>
        </div>
    )
}


export default Settings;