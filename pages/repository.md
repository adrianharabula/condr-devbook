## Repository pattern

Our app implements Repository Pattern for operating with database logic.

### Context

In many applications, the business logic accesses data from data stores such as databases, SharePoint lists, or Web services. Directly accessing the data can result in the following:

 * Duplicated code
 * A higher potential for programming errors
 * Weak typing of the business data
 * Difficulty in centralizing data-related policies such as caching
 * An inability to easily test the business logic in isolation from external dependencies

### Objectives

Use the Repository pattern to achieve one or more of the following objectives:

 * You want to maximize the amount of code that can be tested with automation and to isolate the data layer to support unit testing.
 * You access the data source from many locations and want to apply centrally managed, consistent access rules and logic.
 * You want to implement and centralize a caching strategy for the data source.
 * You want to improve the code's maintainability and readability by separating business logic from data or service access logic.
 * You want to use business entities that are strongly typed so that you can identify problems at compile time instead of at run time.
 * You want to associate a behavior with the related data. For example, you want to calculate fields or enforce complex relationships or business rules between the data elements within an entity.
 * You want to apply a domain model to simplify complex business logic.

Excerpt from [The Repository Pattern](https://msdn.microsoft.com/en-us/library/ff649690.aspx), click to view full page.

### Interactions of the repository

![repository pattern](../images/repository_pattern.png)

### Implementation

#### The interface code EloquentRepositoryInterface

[EloquentRepositoryInterface.php](https://github.com/adrianharabula/condr/blob/master/app/app/Repositories/Eloquent/EloquentRepositoryInterface.php)
```php
<?php

namespace App\Repositories\Eloquent;

interface EloquentRepositoryInterface
{

    /**
     * Get all
     *
     * @return mixed
     */
    public function getAll();


    /**
     * Get one
     *
     * @param  int $id
     *
     * @param  array $columns
     *
     * @return mixed
     */
    public function find($id, $columns = ['*']);


    /**
     * Get one by
     *
     * @param  string $field
     *
     * @param  string $value
     *
     * @param  array  $columns
     *
     * @return mixed
     */
    public function findBy($field, $value, $columns = ['*']);


    /**
     * Create
     *
     * @param array $attributes
     *
     * @return mixed
     */
    public function create(array $attributes);


    /**
     * Update
     *
     * @param       $id
     * @param array $attributes
     *
     * @return mixed
     */
    public function update($id, array $attributes);


    /**
     * Delete
     *
     * @param $id
     *
     * @return mixed
     */
    public function delete($id);
}

```

#### The EloquentRepository class

[EloquentRepository.php](https://github.com/adrianharabula/condr/blob/master/app/app/Repositories/Eloquent/EloquentRepository.php)
```php
<?php

namespace App\Repositories\Eloquent;

use Illuminate\Database\Eloquent\Model;

abstract class EloquentRepository implements EloquentRepositoryInterface
{

    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $_model;


    /**
     * EloquentRepository constructor.
     */
    public function __construct()
    {
        app()->bindMethod($this->getModel(), $this->setModel());
    }


    /**
     * get model
     * @return string
     */
    abstract function getModel();


    /**
     * Set model
     */
    public function setModel()
    {
        $this->_model = app()->make($this->getModel());
        if (! $this->_model instanceof Model) {
            throw new \Exception("Class {$this->$this->_model } must be an instance of Illuminate\\Database\\Eloquent\\Model");
        }
    }


    /**
     * Get All
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll()
    {
        return $this->_model->all();
    }


    /**
     * Get one
     *
     * @param       $id
     *
     * @param array $columns
     *
     * @return mixed
     */
    public function find($id, $columns = ['*'])
    {
        $result = $this->_model->find($id, $columns);

        return $result;
    }


    /**
     * Get one by
     *
     * @param string $attribute
     *
     * @param string $value
     *
     * @param array  $columns
     *
     * @return mixed
     */
    public function findBy($attribute, $value, $columns = ['*'])
    {
        $result = $this->_model->where($attribute, '=', $value)->first($columns);

        return $result;
    }


    /**
     * Create
     *
     * @param array $attributes
     *
     * @return mixed
     */
    public function create(array $attributes)
    {
        return $this->_model->create($attributes);
    }


    /**
     * Update
     *
     * @param       $id
     * @param array $attributes
     *
     * @return bool|mixed
     */
    public function update($id, array $attributes)
    {
        $result = $this->find($id);
        if ($result) {
            $result->update($attributes);

            return $result;
        }

        return false;
    }


    /**
     * Update entity
     *
     * @param       $_model
     * @param array $attributes
     *
     * @param array $except
     *
     * @return bool|mixed
     */
    public function updateEntity($_model, array $attributes, array $except = null)
    {
        if ($_model) {
            $_model->update(array_except($attributes, $except));

            return $_model;
        }

        return false;
    }


    /**
     * Delete
     *
     * @param $id
     *
     * @return bool
     */
    public function delete($id)
    {
        $result = $this->find($id);
        if ($result) {
            $result->delete();

            return true;
        }

        return false;
    }
}

```

### Sample Repository

#### GroupRepository

[GroupRepository.php](https://github.com/adrianharabula/condr/blob/master/app/app/Repositories/GroupRepository.php)
```php
<?php

namespace App\Repositories;

use App\Repositories\Eloquent\EloquentRepository;
use \App\Condrgroup as Group;

class GroupRepository extends EloquentRepository
{  
    public function getModel()
    {
        return Group::class;
    }
}

```

#### GroupController using GroupRepository

[GroupsController.php](https://github.com/adrianharabula/condr/blob/master/app/app/Http/Controllers/GroupsController.php)
```php
<?php 
 
namespace App\Http\Controllers; 
 
use Illuminate\Http\Request; 
use \App\Condrgroup as Group; 
use App\Repositories\GroupRepository; 
Use Auth; 
 
class GroupsController extends Controller 
{ 
    protected $_groupRepository; 

    public function __construct(GroupRepository $_groupRepository){ 
        $this->_groupRepository = $_groupRepository; 
    } 
 
    public function getGroupsList() 
    { 
        return view('groups.listgroups')->with('groups', $this->_groupRepository->getAll()); 
    } 
 
    public function getGroup($id)
    { 
        return view('groups.singleview')->with('group', $this->_groupRepository->find($id)); 
    } 
} 
```
