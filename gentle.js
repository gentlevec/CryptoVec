isValid() {
        // Перед перебором цепочки блоков нужно установить i в 1, так как до первичного блока никаких блоков нет. В результате мы начинаем со второго блока.
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i-1];

            // Проверка
            if (currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.prevHash) {
                return false;
            }
        }

        return true;
    }
