import React, { Component } from "react";
import "./RoundLoader.scss";

function RoundLoader({ loading }) {
    if (!loading) {
        return ""
    }

    return (
        <div id="RoundLoader">
            <div className="loader-main">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <img src="https://securelinx.com/wp-content/themes/wp-slx-v4/img/icons/monitor.png" />
            </div>
        </div>
    );
}

export default RoundLoader
