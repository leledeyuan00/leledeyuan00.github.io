.. For test python in rst

.. default-domain:: py

Python Tutorial
===============


Creating recipes
----------------

To retreive a list of random ingredients,
.. you can use the `lumache.get_random_ingredients` function:

.. .. function:: lumache.get_random_ingredients(kind=None)

..     Return a list of radom ingredients as strings.

..     :param kind: Optional "kind" of ingredients.
..     :type kind: list[str] or None
..     :raise lumache.InvalidKindError: If the kind is not valid.
..     :return: The ingredients list.
..     :rtype: list[str]
    


The ```kind`` parameter should be either ``"meat"``, ``"fish"``, or ``"vegetable"``. 
Otherwise, :py:func:`lumache.get_random_ingredients` will raise a :py:exc:`lumache.InvalidKindError`.


.. >>> import lumache
.. >>> lumache.get_random_ingredients()
.. ['shells', 'gorgonzola', 'parsley']

You can use the ``lumache.get_random_ingredients`` function to create a recipe:

.. autofunction:: lumache.get_random_ingredients

.. autoexception:: lumache.InvalidKindError