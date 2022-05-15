public class Main {

    public static void main(String[] args) {
        Cliente danilo = new Cliente();
        danilo.setNome("Danilo");

        Conta cc = new ContaCorrente(danilo);
        Conta cp = new ContaPoupanca(danilo);

        cc.depositar(100);
        cc.transferir(100, cp);

        cc.imprimirExtrato();
        cp.imprimirExtrato();
    }
}
