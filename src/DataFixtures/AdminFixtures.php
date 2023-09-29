<?php

namespace App\DataFixtures;

use App\Entity\Admin;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AdminFixtures extends Fixture
{
private $passwordHasher;

public function __construct(UserPasswordHasherInterface $passwordHasher)
{
$this->passwordHasher = $passwordHasher;
}

public function load(ObjectManager $manager)
{
// create an admin user
$admin = new Admin();
$admin->setUsername('AP');
$admin->setRoles(['ROLE_ADMIN']);
$admin->setPassword($this->passwordHasher->hashPassword($admin, 'bigjuicycocks'));
$manager->persist($admin);
$manager->flush();
}
}