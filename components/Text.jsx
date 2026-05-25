'use client'
import React from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const Text = () => {

    const handleClick = (mode) => {
        mode ? toast.success('Test Success') : toast.error("test error");
    }

    return (
        <div>
 <Button  variant="destructive"
              onClick={() => handleClick(true) } >Hello Максимушка </Button>
        </div>
    );
};

export default Text;