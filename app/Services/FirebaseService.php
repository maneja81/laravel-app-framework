<?php

namespace App\Services;

use App\Models\User;
use Kreait\Firebase\Factory;

class FirebaseService
{

    protected function firebaseFactory()
    {
        return (new Factory)
            ->withServiceAccount(config('firebase.projects.app.credentials'))
            ->withDatabaseUri(config('firebase.projects.app.database.url'));
    }

    public function dbPath(string $path)
    {
        return $path;
    }

    public function auth()
    {
        return $this->firebaseFactory()->createAuth();
    }

    public function authToken(User $user)
    {
        return $this->auth()->createCustomToken($user->id);
    }

    public function dbWrite(string $path, array $data)
    {
        $path = $this->dbPath($path);
        $database = $this->firebaseFactory()->createDatabase();
        $reference = $database->getReference($path);
        $reference->set($data);
    }

    public function dbRead(string $path)
    {
        $path = $this->dbPath($path);
        $database = $this->firebaseFactory()->createDatabase();
        $reference = $database->getReference($path);

        return $reference->getValue();
    }
}
