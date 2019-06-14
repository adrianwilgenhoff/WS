import SockJS from 'sockjs-client';

const AppConfig = {
    PROTOCOL: "wss:",
    // TODO: change to localhost if you wish to run it locally
    HOST: "//serene-wave-94653.herokuapp.com",
    PORT: ":9000"
}

const Singleton = (function () {
    let instance;

    function createInstance() {
        // TODO: add +  PORT if you want to run it locally
        const socket = new WebSocket(AppConfig.PROTOCOL + AppConfig.HOST);
        //const socket = new SockJS('https://localhost:8080/ws');

        return socket;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton;