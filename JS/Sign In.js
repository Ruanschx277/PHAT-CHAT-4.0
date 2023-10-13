if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];



    if ($username === 'your_username' && $password === 'your_password') {
       
        session_start();
        $_SESSION['authenticated'] = true;
        header('Location: /Page/HOME.HTML'); 
        exit();
    } else {
       
        header('Location: /sign-in.html'); 
        exit();
    }
}