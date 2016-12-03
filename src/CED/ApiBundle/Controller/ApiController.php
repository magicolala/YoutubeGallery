<?php

namespace CED\ApiBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use CED\ApiBundle\Entity\Video;
use Symfony\Component\Validator\Validator;

class ApiController extends Controller
{
    public function saveVideoAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $video = new Video();

        $data = $request->request;

        $video->setTitle($data->get('title'));
        $video->setVideoId($data->get('video_id'));
        $video->setDescription($data->get('description'));

        $em->persist($video);
        $em->flush();

        return new Response('Success');
    }

    public function getVideosAction()
    {
        $videos = $this->getDoctrine()
            ->getRepository('CEDApiBundle:Video')->findAll();

        $response = array();
        foreach ($videos as $video) {
            $response[] = array(
                'title' => $video->getTitle(),
                'video_id' => $video->getVideoId(),
                'description' =>$video->getDescription()
            );
        }

        return new JsonResponse($response);
    }
}
