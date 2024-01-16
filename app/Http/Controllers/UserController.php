<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //show registration form
    public function create() {
        return view("users.register");
    }

    //Show Login form
    public function login(){
        return view("users.login");
    }
}
