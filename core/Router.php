<?php
class Router {
    public function route() {
        $url = isset($_GET['url']) ? $_GET['url'] : 'home';
        $url = rtrim($url, '/');
        $url = explode('/', $url);

        $controllerName = isset($url[0]) ? ucfirst($url[0]) . 'Controller' : 'HomeController';
        $methodName = isset($url[1]) ? $url[1] : 'index';

        $controllerFile = 'controllers/' . $controllerName . '.php';

        if (file_exists($controllerFile)) {
            require_once $controllerFile;
            $controller = new $controllerName();
            
            if (method_exists($controller, $methodName)) {
                $controller->$methodName();
            } else {
                require_once 'views/404.php';
            }
        } else {
            require_once 'views/404.php';
        }
    }
}