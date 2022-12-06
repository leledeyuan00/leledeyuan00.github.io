def get_random_ingredients(kind=None):
    """
    Return a list of random ingredients as strings.

    :param kind: Optional "kind" of integredients.
    :type kind: list[str] or None
    :raise lumache.InvalidKindError: If the kind is not valid.
    :return: A list of random ingredients.
    :rtype: list[str]


    """
    return ['shells', 'gorgonzola', 'parsley']

class InvalidKindError(Exception):
    """Raised if the kind is invalid."""
    pass