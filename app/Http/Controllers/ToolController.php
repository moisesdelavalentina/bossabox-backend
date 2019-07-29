<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tool;
use App\Http\Resources\ToolResource;
use PhpParser\Node\Expr\Cast\Object_;

class ToolController extends Controller
{



   
    public function index(Request $request)
    {
        $parameters = $request->all();
        if (isset($parameters['tag'])) {
            $tag = $parameters['tag'];
            return ToolResource::collection(
                Tool::whereHas('tags', function ($query) use ($tag) {
                    $query->where('label', 'like', $tag);
                })->get()
            );
        } else {
            return ToolResource::collection(Tool::all());
        }
    }



    
    public function create(Request $request)
    {
        $dados = $request->all();
        $tool = new Tool();
        $tool->fill($dados);
        $tool->save();

        $tool->tags()->createMany(
            array_map(function ($tag) {
                return ['label' => $tag];
            }, $dados['tags'])
        );
        return new ToolResource($tool);
    }

    
    public function destroy($id)
    {   
            Tool::destroy($id);
            return '{}';
    }
}
//https://www.loom.com/share/39b156db5b974bedaf062f6a314d5836