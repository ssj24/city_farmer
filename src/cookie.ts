function saveUserToCookie(value: number) {
	document.cookie = `userId=${value}`;
}

function saveUserNameToCookie(value: string) {
	document.cookie = `userName=${value}`;
}

function getCookie(name: string) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}

// function getUserIdCookie() {
//     if (document.cookie && document.cookie !== undefined) {
//         const cookieValue = document.cookie?.split('; ')?.find(row => row.startsWith('userId='))?.split('=')[1] || 'NO';
//         return cookieValue
//     }
// }
// function getUserNameCookie() {
//     if (document.cookie && document.cookie !== undefined) {
//         const cookieValue = document.cookie?.split('; ')?.find(row => row.startsWith('userName='))?.split('=')[1] || 'NO';
//         return cookieValue
//     }
// }

export { saveUserToCookie, saveUserNameToCookie, getCookie };