import React from 'react'
import Employee from './Employee'

const EmployeeWrapper = () => {

    
    const accessories = [
        {
          title: 'Lenovo Laptop Bag',
        },
        {
          title: 'USB 3.0 VGA Adapter',
        },
        {
          title: 'Lenovo Laptop Clock',
        },
        {
          title: 'Thinkpad Mouse (Wired)',
        },
      ];
    return (
        <div>
            <Employee 
            accessories={accessories}
            />
        </div>
    )
}

export default EmployeeWrapper
