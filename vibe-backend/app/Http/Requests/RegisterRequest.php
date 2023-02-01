<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'username' => 'required|unique:users,username',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|confirmed'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El nombre es un campo obligatorio',
            'username.required' => 'El nombre de usuario es un campo obligatorio',
            'username.unique' => 'El nombre de usuario ya existe',
            'email.required' => 'El email es un campo obligatorio',
            'email.email' => 'El campo email debe ser una dirección de correo válida',
            'email.unique' => 'Ya existe una cuenta con ese email',
            'password.required' => 'La contraseña es un campo obligatorio',
            'password.confirmed' => 'Las contraseñas no coinciden',
            'password.min' => 'La contraseña debe tener un mínimo de 8 carácteres'
        ];
    }
}
