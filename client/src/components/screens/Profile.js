import React from 'react'

export const Profile = () => {
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{

                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"180px",height:"180px",borderRadius:"80px"}}
                    src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/56828188_1290842587746642_2629606663417495552_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=h62wQNMEsKYAX8c6pkr&_nc_ht=scontent.fgau1-1.fna&oh=4d54ff4b85e591af2953d4d50c2b9407&oe=60C38FBA"
                    alt="sexy boy"/>
                </div>
                <div>
                    <h4>Onkar Sawarna</h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        width:"108%"
                    }}>
                        <h6>30 posts</h6>
                        <h6>599 followers</h6>
                        <h6>0 following</h6>
                    </div>
                </div>
            </div>
            <div className="Gallery">
            <img className="item" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="nice boy"/>
            <img className="item" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="nice boy"/>
            <img className="item" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="nice boy"/>
            <img className="item" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="nice boy"/>
            <img className="item" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="nice boy"/>
            <img className="item" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="nice boy"/>


            </div>
        </div>
    )
} 