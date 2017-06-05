# [\#145 Implementing Repository Pattern](https://github.com/adrianharabula/condr/issues/145)

> state: **open** opened by: **adrianharabula** on: **5/26/2017**

{% raw %}
app/Repositories/Products.php
```php
namespace App\Repositories;

use App\Product;

class Products
{
    private $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function getProduct()
    {
        return $this->product;
    }
}
```

Iar din controller facem asta:
```php
use App\Repositories\Products;
class ProductsController extends Controller
{
    function index(Products $products)
    {
        return view('products')->with('products', $products->getProduct()->all());
    }
}
```
{% endraw %}


### Comments

---
> from: [**pomirleanu**](https://github.com/adrianharabula/condr/issues/145#issuecomment-304280246) on: **5/26/2017**

{% raw %}
Interface:
```php
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

Abstract repository:
```php
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
        $this->_model = $this->setModel();
    }


    /**
     * get model
     * @return string
     */
    abstract public function getModel();


    /**
     * Set model
     */
    public function setModel()
    {
        $this->_model = app()->make($this->getModel());
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
     * @return bool|mixed
     */
    public function updateEntity($_model, array $attributes)
    {
        if ($_model) {
            $_model->update(array_except($attributes, 'email'));

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
Product repository:
```php
class ProductRepository extends EloquentRepository
{

    public function getModel()
    {
        return ProductModel::class;
    }
}
```

Product Controller:
```php
class ProductController extends Controller
{

    /**
     * @var \App\Repositories\Product\ProductRepository
     */
    private $_productRepository;


    /**
     * ProductController constructor.
     *
     * @param \App\Repositories\Product\ProductRepository $_productRepository
     */
    public function __construct(ProductRepository $_productRepository)
    {
        $this->_productRepository = $_productRepository;
    }

   public function getProducts()
    {
        return view('products')->with('products',$this->_productRepository->all());
    }
```
{% endraw %}
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/145#issuecomment-304497067) on: **5/28/2017**

{% raw %}
thanks!!! https://github.com/adrianharabula/condr/blob/953620aad8b08178940ab7934af6a798b1189c16/app/app/Repositories/ProductRepository.php
{% endraw %}
