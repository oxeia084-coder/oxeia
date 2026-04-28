import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — OXEIA",
  description: "Saiba como a OXEIA coleta, usa e protege suas informações.",
};

// ⚠️ Preencha com os dados reais da empresa antes de publicar
const COMPANY = {
  name: "OXEIA Tecnologia",
  cnpj: "XX.XXX.XXX/0001-XX",
  email: "contato@oxeia.com.br",
  updatedAt: "27 de abril de 2026",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F5F5F7]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#71717A] hover:text-[#A1A1AA] transition-colors mb-10"
        >
          ← Voltar ao site
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Política de Privacidade</h1>
        <p className="text-[#71717A] text-sm mb-12">
          Última atualização: {COMPANY.updatedAt}
        </p>

        <div className="space-y-10 text-[#A1A1AA] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Sobre esta política</h2>
            <p>
              A <strong className="text-white">{COMPANY.name}</strong> (CNPJ {COMPANY.cnpj}) se
              compromete a proteger a privacidade de seus clientes, parceiros e visitantes do
              site. Esta Política de Privacidade explica quais informações coletamos, como as
              utilizamos e seus direitos em relação a esses dados, em conformidade com a Lei
              Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Informações que coletamos
            </h2>
            <p className="mb-3">
              Ao navegar neste site ou entrar em contato conosco, podemos coletar as seguintes
              informações:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-[#F5F5F7]">Dados de contato:</strong> nome, e-mail e
                número de telefone/WhatsApp fornecidos voluntariamente ao nos contactar.
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Dados de navegação:</strong> endereço IP,
                tipo de navegador, páginas visitadas e tempo de permanência (via ferramentas de
                analytics, quando ativadas).
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Dados de negócio:</strong> informações sobre
                sua empresa compartilhadas durante consultas ou propostas comerciais.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Como usamos suas informações
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Responder a solicitações de contato e propostas comerciais.</li>
              <li>Entender as necessidades do seu negócio para oferecer soluções adequadas.</li>
              <li>Melhorar nosso site e serviços com base em métricas de uso.</li>
              <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
            </ul>
            <p className="mt-3">
              <strong className="text-[#F5F5F7]">Não vendemos, alugamos ou compartilhamos</strong>{" "}
              seus dados pessoais com terceiros para fins de marketing sem seu consentimento
              explícito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Base legal para tratamento (LGPD)
            </h2>
            <p>
              O tratamento de dados pessoais pela OXEIA se baseia nas seguintes hipóteses
              previstas na LGPD:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <strong className="text-[#F5F5F7]">Consentimento</strong> — quando você nos
                fornece dados voluntariamente.
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Execução de contrato</strong> — quando o
                tratamento é necessário para prestar nossos serviços.
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Legítimo interesse</strong> — para melhorar
                nossos serviços e comunicar novidades relevantes.
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Cumprimento de obrigação legal</strong> —
                quando exigido por lei.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Cookies</h2>
            <p>
              Este site pode utilizar cookies técnicos para garantir o funcionamento correto das
              páginas. Não utilizamos cookies de rastreamento de terceiros sem seu consentimento.
              Você pode configurar seu navegador para recusar cookies, porém algumas
              funcionalidades podem ser afetadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Retenção de dados</h2>
            <p>
              Mantemos seus dados apenas pelo tempo necessário para os fins descritos nesta
              política ou conforme exigido por lei. Dados de contato são retidos por até 5 anos
              após o último contato, salvo obrigação legal de prazo diferente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Seus direitos</h2>
            <p>Nos termos da LGPD, você tem direito a:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Confirmar se tratamos seus dados pessoais.</li>
              <li>Acessar, corrigir ou excluir seus dados.</li>
              <li>Solicitar a portabilidade dos dados.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
              <li>Apresentar reclamação à ANPD (Autoridade Nacional de Proteção de Dados).</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer desses direitos, entre em contato pelo e-mail{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-[#8B5CF6] hover:underline"
              >
                {COMPANY.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados
              contra acesso não autorizado, perda ou alteração. Nossos sistemas utilizam
              criptografia e controles de acesso compatíveis com as melhores práticas do setor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A versão mais
              recente estará sempre disponível nesta página, com a data de atualização indicada
              no topo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contato</h2>
            <p>
              Para dúvidas, solicitações ou exercício de direitos, entre em contato:
            </p>
            <div className="mt-3 bg-[#13131A] border border-[rgba(139,92,246,0.1)] rounded-xl p-4 space-y-1">
              <p>
                <strong className="text-white">{COMPANY.name}</strong>
              </p>
              <p>CNPJ: {COMPANY.cnpj}</p>
              <p>
                E-mail:{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-[#8B5CF6] hover:underline">
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
