<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

class FileController extends AbstractController
{
    public function downloadCv(): BinaryFileResponse
    {
        $file = $this->getParameter('kernel.project_dir') . '/public/build/files/CV PAUQUIN Alexandre.pdf';

        if (!file_exists($file)) {
            throw $this->createNotFoundException('The file does not exist.');
        }

        $response = new BinaryFileResponse($file);
        $response->headers->set('Content-Type', 'application/pdf');
        $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT, 'CV PAUQUIN Alexandre.pdf');

        return $response;
    }
};
