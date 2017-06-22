function maxLengthCheck2(object)
  {
    if (object.value.length > object.maxLength2)
      object.value = object.value.slice(0, object.maxLength2)
  }
