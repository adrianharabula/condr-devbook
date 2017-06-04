# [Implementing Repository Pattern](https://github.com/adrianharabula/condr/issues/145)

> state: **open** opened by: **adrianharabula** on: **5/26/2017**

app/Repositories/Products.php
&#x60;&#x60;&#x60;php
namespace App\Repositories;

use App\Product;

class Products
{
    private $product;

    public function __construct(Product $product)
    {
        $this-&gt;product &#x3D; $product;
    }

    public function getProduct()
    {
        return $this-&gt;product;
    }
}
&#x60;&#x60;&#x60;

Iar din controller facem asta:
&#x60;&#x60;&#x60;php
use App\Repositories\Products;
class ProductsController extends Controller
{
    function index(Products $products)
    {
        return view(&#x27;products&#x27;)-&gt;with(&#x27;products&#x27;, $products-&gt;getProduct()-&gt;all());
    }
}
&#x60;&#x60;&#x60;

### Comments

---
> from: [**pomirleanu**](https://github.com/adrianharabula/condr/issues/145#issuecomment-304280246) on: **5/26/2017**

Interface:
&#x60;&#x60;&#x60;php
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
    public function find($id, $columns &#x3D; [&#x27;*&#x27;]);


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
    public function findBy($field, $value, $columns &#x3D; [&#x27;*&#x27;]);


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
&#x60;&#x60;&#x60;

Abstract repository:
&#x60;&#x60;&#x60;php
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
        $this-&gt;_model &#x3D; $this-&gt;setModel();
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
        $this-&gt;_model &#x3D; app()-&gt;make($this-&gt;getModel());
    }


    /**
     * Get All
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll()
    {
        return $this-&gt;_model-&gt;all();
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
    public function find($id, $columns &#x3D; [&#x27;*&#x27;])
    {
        $result &#x3D; $this-&gt;_model-&gt;find($id, $columns);

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
    public function findBy($attribute, $value, $columns &#x3D; [&#x27;*&#x27;])
    {
        $result &#x3D; $this-&gt;_model-&gt;where($attribute, &#x27;&#x3D;&#x27;, $value)-&gt;first($columns);

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
        return $this-&gt;_model-&gt;create($attributes);
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
        $result &#x3D; $this-&gt;find($id);
        if ($result) {
            $result-&gt;update($attributes);

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
            $_model-&gt;update(array_except($attributes, &#x27;email&#x27;));

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
        $result &#x3D; $this-&gt;find($id);
        if ($result) {
            $result-&gt;delete();

            return true;
        }

        return false;
    }
}
&#x60;&#x60;&#x60;
Product repository:
&#x60;&#x60;&#x60;php
class ProductRepository extends EloquentRepository
{

    public function getModel()
    {
        return ProductModel::class;
    }
}
&#x60;&#x60;&#x60;

Product Controller:
&#x60;&#x60;&#x60;php
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
        $this-&gt;_productRepository &#x3D; $_productRepository;
    }

   public function getProducts()
    {
        return view(&#x27;products&#x27;)-&gt;with(&#x27;products&#x27;,$this-&gt;_productRepository-&gt;all());
    }
&#x60;&#x60;&#x60;
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/145#issuecomment-304497067) on: **5/28/2017**

thanks!!! https://github.com/adrianharabula/condr/blob/953620aad8b08178940ab7934af6a798b1189c16/app/app/Repositories/ProductRepository.php
