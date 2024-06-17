<FormControl>
<h3 className="flow-root -my-3">
  <DisclosureButton className="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
    
    <FormLabel id="demo-radio-buttons-group-label">{section.name}</FormLabel>
    <span className="flex items-center ml-6">
      {open ? (
        <MinusIcon className="w-5 h-5" aria-hidden="true" />
      ) : (
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      )}
    </span>
  </DisclosureButton>
</h3>
<DisclosurePanel className="pt-6">
  <div className="space-y-4">
    {section.options.map((option, optionIdx) => (
      <div key={option.value} className="flex items-center">
       <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
                <FormControlLabel 
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                 />
        <label
          htmlFor={`filter-${section.id}-${optionIdx}`}
          className="ml-3 text-sm text-gray-600"
        >
          {option.label}
        </label>
      </RadioGroup>
      </div>
    ))}
  </div>
</DisclosurePanel>
</FormControl>





