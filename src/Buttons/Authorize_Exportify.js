function Authorize_Exportify() {

    function authorize() {

        function getQueryParam(name) {
            console.log("this is the name coming from the query functiun", name);
            name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
            console.log("This s the name coming after the replace operation", name);
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(window.location.search);
                console.log("this is the regExp", regex);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        let clientId = getQueryParam("app_client_id")
        let changeUser = getQueryParam("change_user") !== ""

        // Use Exportify application clientId if none given
        if (clientId === '') {
            clientId = "9950ac751e34487dbbe027c4fd7f8e99"
        }

        window.location.href = "https://accounts.spotify.com/authorize" +
            "?client_id=" + clientId +
            "&redirect_uri=" + encodeURIComponent([window.location.protocol, '//', window.location.host, window.location.pathname].join('')) +
            "&scope=playlist-read-private%20playlist-read-collaborative%20user-library-read" +
            "&response_type=token" 
    }

    return (
        <>
            <div onClick={authorize}>Authorize Exportify</div>
        </>
    )

}


export default Authorize_Exportify; 